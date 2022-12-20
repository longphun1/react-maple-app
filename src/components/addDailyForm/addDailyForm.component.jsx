import { useState } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";

const AddDailyForm = ({id}) => {
    
    const [newDaily, setNewDaily] = useState('');

    const dailyCollectionRef = collection(db, `charactersDailies/${id}/dailies`)

    const createDaily = async () => {
        await addDoc(dailyCollectionRef, { dailyName: newDaily })
        window.location.reload(false);
    }

    return (
        <div>
            <h3>add daily</h3>
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

export default AddDailyForm;