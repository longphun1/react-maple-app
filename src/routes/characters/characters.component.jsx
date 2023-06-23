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
    const [characterss, setCharacterss] = useState([]);
    
    const uid = useSelector(selectCurrentUser).uid;

    const charactersCollectionRef = collection(db, `userCharacters/${uid}/characters`);

    const navigate = useNavigate()

    useEffect(() => {
        const getCharacters = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacterss(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getCharacters();
    }, []);

    const deleteCharacter = async (id) => {
        const characterDoc = doc(db, `userCharacters/${uid}/characters`, id);
        await deleteDoc(characterDoc);
        navigate('/missions')
    };

    return (
        <div>
        {characterss.map((character) => {
            return (
                <div className="characters-container" key={character.id}>
                    <h1 className="character-name">{character.characterClass}</h1>
                    <button className="update-character-btn">Update</button>
                    <button className="delete-character-btn" onClick={() => {deleteCharacter(character.id)}}>Delete</button>
                </div>
            )
        })}
        </div>
    )
}

export default Characters;
