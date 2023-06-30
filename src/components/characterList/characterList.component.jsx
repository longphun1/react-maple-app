import { useState, useEffect, Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Character from "../character/character.component";
import SearchBox from "../search-box/search-box.component";
import Pagination from "../pagination/pagination.component";
import './characterList.styles.scss'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [searchField, setSearchField] = useState('')
    const [filteredCharacters, setFilteredCharacters] = useState(characters)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(8)

    const sortCharacterBasedOnLvl = [ ...filteredCharacters].sort((a, b) => b.characterLevel - a.characterLevel)

    const currentUser = useSelector(selectCurrentUser)

    const charactersCollectionRef = collection(db, `userCharacters/${currentUser.uid}/characters`)

    useEffect(() => {
        const getDailies = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getDailies();
    }, []);

    useEffect(() => {
        const newFilteredCharacters = characters.filter((character) => {
            return character.characterName.toLocaleLowerCase().includes(searchField);
        })

        setFilteredCharacters(newFilteredCharacters)
    }, [characters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      };

    const lastPostIndex = currentPage * postsPerPage;
    const firePostIndex = lastPostIndex - postsPerPage;
    const currentCharacters = sortCharacterBasedOnLvl.slice(firePostIndex, lastPostIndex)

    return (
        <Fragment>
            <SearchBox className='weeklies-search-box' onChangeHandler={onSearchChange} placeholder='Search Characters'/>
            {characters.length ?
                <div className="CL-container">
                    {currentCharacters.map((character) => {
                        return (
                            <Character key={character.id} character={character} />
                        )
                    })}
                </div>
                :
                <div className="empty-CL-container">
                    <h3 className="no-characters">YOU HAVE NO CHARACTERS</h3>
                </div>
            }
            <Pagination totalPosts={filteredCharacters.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </Fragment>
    )
};

export default CharacterList;