import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";

const AddForm = () => {
    const [newDaily, setNewDaily] = useState('');

    const dailyCollectionRef = collection(db, 'dailies')

    const createDaily = async () => {
        await addDoc(dailyCollectionRef, { name: newDaily })
    }

    return (
        <div>
            <h1>add form</h1>
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