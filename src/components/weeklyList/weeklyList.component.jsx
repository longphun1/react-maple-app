import { useState, useEffect, Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectBossTotal } from "../../store/checkbox/checkbox.selector";
import Weekly from '../weekly/weekly.component';
import WeeklyCheckbox from "../weeklyCheckbox/weeklyCheckbox.component";
import Pagination from "../pagination/pagination.component";
import SearchBox from "../search-box/search-box.component";
import './weeklyList.styles.scss';
import { useDispatch } from "react-redux";
import { clearpersist } from "../../store/store";

const WeeklyList = () => {
    const [weeklies, setWeeklies] = useState([])
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(5)
    const [searchField, setSearchField] = useState('')
    const [filteredWeeklies, setFilteredWeeklies] = useState(weeklies)

    const uid = useSelector(selectCurrentUser).uid
    const bossTotal = useSelector(selectBossTotal).toLocaleString()

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
    }, []);

    useEffect(() => {
        const newFilteredWeeklies = weeklies.filter((weekly) => {
            return weekly.weeklyName.toLocaleLowerCase().includes(searchField);
        })

        setFilteredWeeklies(newFilteredWeeklies)
    }, [weeklies, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      };

    const sortBossBasedOnPrice = [ ...filteredWeeklies].sort((a, b) => a.weeklyPrice - b.weeklyPrice)
    const sortCharacterBasedOnLvl = [ ...characters].sort((a, b) => b.characterLevel - a.characterLevel)

    const lastPostIndex = currentPage * postsPerPage;
    const firePostIndex = lastPostIndex - postsPerPage;
    const currentCharacters = sortCharacterBasedOnLvl.slice(firePostIndex, lastPostIndex)

    // const dispatch = useDispatch()
    // const clearredux = () => dispatch(clearpersist())

    return (
        <Fragment>
            <SearchBox className='weeklies-search-box' onChangeHandler={onSearchChange} placeholder='Search Weeklies'/>
            {filteredWeeklies.length ?
                <div className='WL-container'>
                    <table className="weeklyTable">
                        <tbody>
                            <tr>
                                <th style={{ width: 80 }}></th>
                                {currentCharacters.map((character) => {
                                    return (
                                        <Fragment key={character.id}>
                                            <th>{character.characterName}</th>
                                        </Fragment>
                                    )
                                })}
                            </tr>

                            {sortBossBasedOnPrice.map((weekly) => {
                                return (
                                    <Fragment key={weekly.id}>
                                        <tr>
                                            <td ><Weekly weekly={weekly} /></td>
                                            {currentCharacters.map((character) => {
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
            <Pagination totalPosts={characters.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <div className="boss-total-container">
                <h3 className="bossTotal-header">Total Meso:</h3>
                <h3 className="bosstotal">{bossTotal}</h3>
                {/* <button onClick={clearredux}> Clear </button> */}
            </div>
        </Fragment>
    )
};

export default WeeklyList;