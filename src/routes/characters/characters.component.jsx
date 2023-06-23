import { useState, useEffect, Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    doc,
    getDocs,
    deleteDoc
} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import './characters.styles.scss';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    console.log(characters)

    const userId = useSelector(selectCurrentUser).uid;

    const charactersCollectionRef = collection(db, `userCharacters/${userId}/characters`);

    const navigate = useNavigate()

    useEffect(() => {
        const getCharacters = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getCharacters();
    }, []);

    const deleteCharacter = async (id) => {
        const characterDoc = doc(db, `userCharacters/${userId}/characters`, id);
        await deleteDoc(characterDoc);
        navigate('/missions')
    };

    const goToUpdatePage = async (id) => {
        navigate(`/character/${id}`)
    }

    const backToMissions = () => {
        navigate('/missions')
    }

    return (
        <div className="characters-container">
            <div className="go-back-container">
                <span className="go-back-hex" onClick={backToMissions}>&#8617;</span>
            </div>
            {characters.map((character) => {
                return (
                    <div className="characters-sub-container" key={character.id}>
                        <h1 className="character-name">{character.characterClass}</h1>
                        <button className="update-character-btn" onClick={() => { goToUpdatePage(character.id) }}>Update</button>
                        <button className="delete-character-btn" onClick={() => { deleteCharacter(character.id) }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Characters;
