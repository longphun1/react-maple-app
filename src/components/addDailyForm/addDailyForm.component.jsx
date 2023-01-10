import { useState } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import './addDailyForm.styles.scss'

const AddDailyForm = ({ character_id }) => {

    const [newDaily, setNewDaily] = useState('');

    const dailyCollectionRef = collection(db, `charactersDailies/${character_id}/dailies`)

    const createDaily = async () => {
        await addDoc(dailyCollectionRef, { dailyName: newDaily })
        window.location.reload(false);
    }

    return (
        <div className="addDailyContainer">
            <form>
                <input
                    className="addDailyInput"
                    placeholder="Add a daily"
                    onChange={(event) => {
                        setNewDaily(event.target.value)
                    }}
                />
                <h3 className="addDailyBTN" onClick={createDaily}>&#43;</h3>
            </form>
        </div>
    )
};

export default AddDailyForm;