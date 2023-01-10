import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { selectCurrentUser } from "../../store/user/user.selector";
import './addWeeklyForm.styles.scss'

const AddWeeklyForm = () => {
    const [newWeekly, setNewWeekly] = useState('');

    const uid = useSelector(selectCurrentUser).uid

    const weeklyCollectionRef = collection(db, `userWeeklies/${uid}/weeklies`)

    const createWeekly = async () => {
        await addDoc(weeklyCollectionRef, { weeklyName: newWeekly })
        window.location.reload(false);
    }
    return (
        <div className="addWeeklyContainer">
            <form>
            <input 
                className="addWeeklyInput"
                placeholder="Add Weekly"
                onChange={(event) => {
                    setNewWeekly(event.target.value)
                }}
            />
            <h3 className="addWeeklyBTN" onClick={createWeekly}>&#43;</h3>
            </form>
        </div>
    )
};

export default AddWeeklyForm;