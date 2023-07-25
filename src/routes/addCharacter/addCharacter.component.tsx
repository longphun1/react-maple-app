import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import './addCharacter.styles.scss'

const AddCharacter = () => {
    const [newCharacterName, setNewCharacterName] = useState('');
    const [newCharacterClass, setNewCharacterClass] = useState('');
    const [newCharacterLevel, setNewCharacterLevel] = useState('');

    const uid = useSelector(selectCurrentUser).uid

    const characterCollectionRef = collection(db, `userCharacters/${uid}/characters`)

    const navigate = useNavigate()

    const createCharacter = async () => {
        await addDoc(characterCollectionRef, { characterName: newCharacterName, characterClass: newCharacterClass, characterLevel: newCharacterLevel })
        navigate('/missions')
    }

    const backToMissions = () => {
        navigate('/missions')
    }

    return (
        <div className="addCharacterContainer">
            <div className="go-back-container">
                <span className="go-back-hex" onClick={backToMissions}>&#8617;</span>
            </div>
            <h2 className="addCharacterTitle">ADD A CHARACTER</h2>
            <div>
                <input 
                    className="addCharacterInput"
                    placeholder="Character Name"
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
            <div>
                <input 
                    className="addCharacterInput"
                    placeholder="Level"
                    type="number"
                    onChange={(event) => {
                        setNewCharacterLevel(event.target.value)
                    }}
                />
            </div>
            <button className="addCharacterBTN" onClick={createCharacter}>Submit</button>
        </div>
    )
};

export default AddCharacter;

