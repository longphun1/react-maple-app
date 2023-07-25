import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    doc,
    getDocs,
    updateDoc
} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CharacterType } from '../../components/shared-types';
import './updateCharacter.styles.scss';

const UpdateCharacter = () => {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [updateCharacterName, setUpdateCharacterName] = useState('')
    const [updateCharacterClass, setUpdateCharacterClass] = useState('')
    const [updateCharacterLevel, setUpdateCharacterLevel] = useState('')
    
    const { id } = useParams()
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

    const updateCharacter = async () => {
        const characterDoc = doc(db, `userCharacters/${userId}/characters/${id}`);
        if (updateCharacterName !== '') {
            await updateDoc(characterDoc, { characterName: updateCharacterName })
            navigate('/characters')
        }
        if (updateCharacterClass !== '') {
            await updateDoc(characterDoc, { characterClass: updateCharacterClass })
            navigate('/characters')
        }
        if (updateCharacterLevel !== '') {
            await updateDoc(characterDoc, { characterLevel: updateCharacterLevel })
            navigate('/characters')
        }
    }

    const backToCharacters = () => {
        navigate('/characters')
    }

    return (
        <div className='update-container'>
            {characters.map((character) => {
                return (
                    <Fragment key={character.id}>
                        {character.id === id ?
                            <div>
                                <div className="go-back-container">
                                    <span className="go-back-hex" onClick={backToCharacters}>&#8617;</span>
                                </div>
                                <h2 className="updateCharacterTitle">Update Your Character</h2>
                                <div>
                                    <input
                                        className="updateCharacterInput"
                                        placeholder={'Name' + "  (" + character.characterName + ")"}
                                        onChange={(event) => {
                                            setUpdateCharacterName(event.target.value)
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        className="updateCharacterInput"
                                        placeholder={"Class" + "  (" + character.characterClass + ")"}
                                        onChange={(event) => {
                                            setUpdateCharacterClass(event.target.value)
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        className="updateCharacterInput"
                                        placeholder={"Level" + "  (" +character.characterLevel + ")"}
                                        type="number"
                                        onChange={(event) => {
                                            setUpdateCharacterLevel(event.target.value)
                                        }}
                                    />
                                </div>
                                <button className="updateCharacterBTN" onClick={() => { updateCharacter() }}>Update</button>
                            </div>
                            :
                            null
                        }
                    </Fragment>
                )
            }
            )}
        </div>
    )
}

export default UpdateCharacter;
