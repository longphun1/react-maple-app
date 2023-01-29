import { useState } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './addWeekly.styles.scss'

const AddWeekly = () => {
    const [newWeeklyName, setNewWeeklyName] = useState('');
    const [newWeeklyPrice, setNewWeeklyPrice] = useState('');

    const uid = useSelector(selectCurrentUser).uid

    const navigate = useNavigate()

    const weeklyCollectionRef = collection(db, `userWeeklies/${uid}/weeklies`)

    const createWeekly = async () => {
        await addDoc(weeklyCollectionRef, { weeklyName: newWeeklyName, weeklyPrice: Number(newWeeklyPrice) });
        navigate('/missions');
    }
    return (
        <div className="addWeeklyContainer">
            <h2 className="addWeeklyTitle">ADD WEEKLY MISSION</h2>
            <div>
                <input
                    className="addWeeklyInput"
                    placeholder="Name"
                    onChange={(event) => {
                        setNewWeeklyName(event.target.value)
                    }}
                />
            </div>
            <div>
                <input
                    className="addWeeklyInput"
                    type='number'
                    placeholder="Price (optional)"
                    onChange={(event) => {
                        setNewWeeklyPrice(event.target.value)
                    }}
                />
            </div>
            <button className="addWeeklyBTN" onClick={createWeekly}>Submit</button>

        </div>
    )
}

export default AddWeekly;