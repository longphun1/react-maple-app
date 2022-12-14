import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { selectCurrentUser } from "../../store/user/user.selector";

const AddForm = () => {
    const [newDaily, setNewDaily] = useState('');

    const uid = useSelector(selectCurrentUser).uid

    const dailyCollectionRef = collection(db, `userDailies/${uid}/dailies`)

    const createDaily = async () => {
        await addDoc(dailyCollectionRef, { name: newDaily })
    }

    return (
        <div>
            <h1>add form</h1>
            <h2>{uid}</h2>
            <input 
                placeholder="Name"
                onChange={(event) => {
                    setNewDaily(event.target.value)
                }}
            />
            <button onClick={createDaily}>Create</button>
        </div>
    )
};

export default AddForm;