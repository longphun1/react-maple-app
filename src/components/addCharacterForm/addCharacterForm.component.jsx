import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h2>Add Character Form</h2>
            <input 
                placeholder="Character"
                onChange={(event) => {
                    setNewCharacterName(event.target.value)
                }}
            />
            <input 
                placeholder="Class"
                onChange={(event) => {
                    setNewCharacterClass(event.target.value)
                }}
            />
            <button onClick={createCharacter}>Create</button>
        </div>
    )
};

export default AddCharacterForm;