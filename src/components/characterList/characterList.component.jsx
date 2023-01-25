import { useState, useEffect, Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Character from "../character/character.component";
import './characterList.styles.scss'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    const currentUser = useSelector(selectCurrentUser)

    const charactersCollectionRef = collection(db, `userCharacters/${currentUser.uid}/characters`)

    useEffect(() => {
        const getDailies = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getDailies();
    }, []);

    return (
        <Fragment>
            {characters.length ?
                <div className="CL-container">
                    {characters.map((character) => {
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
        </Fragment>
    )
};

export default CharacterList;