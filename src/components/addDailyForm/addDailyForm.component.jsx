import { useState } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";

const AddDailyForm = ({character_id}) => {
    
    const [newDaily, setNewDaily] = useState('');

    const dailyCollectionRef = collection(db, `charactersDailies/${character_id}/dailies`)

    const createDaily = async () => {
        await addDoc(dailyCollectionRef, { dailyName: newDaily })
        window.location.reload(false);
    }

    return (
        <div>
            <input 
                placeholder="Add a daily"
                onChange={(event) => {
                    setNewDaily(event.target.value)
                }}
            />
            <button onClick={createDaily}>Create</button>
        </div>
    )
};

export default AddDailyForm;