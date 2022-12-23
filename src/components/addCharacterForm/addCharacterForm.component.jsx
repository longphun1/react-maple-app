import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import './addCharacterForm.styles.css'

const AddCharacterForm = () => {
    const [newCharacterName, setNewCharacterName] = useState('');
    const [newCharacterClass, setNewCharacterClass] = useState('');

    const uid = useSelector(selectCurrentUser).uid

    const characterCollectionRef = collection(db, `userCharacters/${uid}/characters`)

    const navigate = useNavigate()

    const createCharacter = async () => {
        await addDoc(characterCollectionRef, { characterName: newCharacterName, characterClass: newCharacterClass })
        navigate('/')
    }

    return (
        <div className="addCharacterContainer">
            <h1 className="addCharacterTitle">Add a Character</h1>
            <div>
                <input 
                    className="addCharacterInput"
                    placeholder="Character"
                    onChange={(event) => {
                        setNewCharacterName(event.target.value)
                    }}
                />
            </div>
            <div>
                <input 
                    className="addCharacterInput"
                    placeholder="Class"
                    onChange={(event) => {
                        setNewCharacterClass(event.target.value)
                    }}
                />
            </div>
            <button className="addCharacterBTN" onClick={createCharacter}>Submit</button>
        </div>
    )
};

export default AddCharacterForm;