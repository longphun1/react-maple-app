import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import AddWeeklyForm from '../addWeeklyForm/addWeeklyForm.component';
import Weekly from '../weekly/weekly.component';
import './weeklyList.styles.css';

const WeeklyList = () => {
    const [weeklies, setWeeklies] = useState([])
    const [characters, setCharacters] = useState([])

    const uid = useSelector(selectCurrentUser).uid

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

    return (
        <div className='WL-container'>
            <AddWeeklyForm />
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

                    {weeklies.map((weekly) => {
                        return (
                            <Fragment key={weekly.id}>
                                <tr>
                                    <td ><Weekly weekly={weekly} /></td>
                                    {characters.map((character) => {
                                        return (
                                            <Fragment key={character.id}>
                                                <td><input className="weeklyCheckbox" type="checkbox" /></td>
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
    )
};

export default WeeklyList;