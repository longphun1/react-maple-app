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
import { CharacterType } from "../../components/shared-types";
import './characters.styles.scss';

const Characters = () => {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    console.log(characters)

    const userId = useSelector(selectCurrentUser).uid;

    const charactersCollectionRef = collection(db, `userCharacters/${userId}/characters`);

    const navigate = useNavigate()

    useEffect(() => {
        const getCharacters = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacters(data.docs.map((doc) => ({ 
                ...doc.data(), 
                id: doc.id,
                characterClass: doc.data().characterClass,
                characterLevel: doc.data().characterLevel,
                characterName: doc.data().characterName
            })))
        };

        getCharacters();
    }, []);

    const deleteCharacter = async (id: string) => {
        const characterDoc = doc(db, `userCharacters/${userId}/characters`, id);
        await deleteDoc(characterDoc);
        navigate('/missions')
    };

    const goToUpdatePage = async (id: string) => {
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
