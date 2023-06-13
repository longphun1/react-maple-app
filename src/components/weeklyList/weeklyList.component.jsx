import { useState, useEffect, Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import Weekly from '../weekly/weekly.component';
import WeeklyCheckbox from "../weeklyCheckbox/weeklyCheckbox.component";
import './weeklyList.styles.scss';
import { selectBossTotal } from "../../store/checkbox/checkbox.selector";
import { useDispatch } from "react-redux";
import { clearpersist } from "../../store/store";

const WeeklyList = () => {
    const [weeklies, setWeeklies] = useState([])
    const [characters, setCharacters] = useState([])

    const uid = useSelector(selectCurrentUser).uid
    const bossTotal = useSelector(selectBossTotal)

    const weekliesCollectionRef = collection(db, `userWeeklies/${uid}/weeklies`)
    const charactersCollectionRef = collection(db, `userCharacters/${uid}/characters`)

    useEffect(() => {
        const getWeeklies = async () => {
            const data = await getDocs(weekliesCollectionRef);
            setWeeklies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getWeeklies();
    }, []);

    useEffect(() => {
        const getCharacters = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getCharacters();
    }, [])

    const sortData = [ ...weeklies].sort((a, b) => a.weeklyPrice - b.weeklyPrice)

    const dispatch = useDispatch()

    const clearredux = () => dispatch(clearpersist())

    return (
        <Fragment>
            {weeklies.length ?
                <div className='WL-container'>
                    <table className="weeklyTable">
                        <tbody>
                            <tr>
                                <th style={{ width: 80 }}></th>
                                {characters.map((character) => {
                                    return (
                                        <Fragment key={character.id}>
                                            <th>{character.characterName}</th>
                                        </Fragment>
                                    )
                                })}
                            </tr>

                            {sortData.map((weekly) => {
                                return (
                                    <Fragment key={weekly.id}>
                                        <tr>
                                            <td ><Weekly weekly={weekly} /></td>
                                            {characters.map((character) => {
                                                return (
                                                    <Fragment key={character.id}>
                                                        <td>
                                                            <WeeklyCheckbox weekly={weekly} character_id={character.id}/>
                                                        </td>
                                                    </Fragment>
                                                )
                                            })}
                                        </tr>
                                    </Fragment>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div>
                    <h3 className="no-weeklies">YOU HAVE NO WEEKLIES</h3>
                </div>
            }
            <div>
                <h3 className="bosstotal">{bossTotal}</h3>
                <button onClick={clearredux}> Clear </button>
            </div>
        </Fragment>
    )
};

export default WeeklyList;