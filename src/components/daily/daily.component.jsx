import { useEffect, useState } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { deleteDoc, doc } from "firebase/firestore";
import './daily.styles.css'

const Daily = ({daily, character_id}) => {
    const { dailyName, id } = daily;
    const [ isChecked, setIsChecked ] = useState(false)

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

    const deleteDaily = async (id) => {
        const dailyDoc = doc(db, `charactersDailies/${character_id}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload(false)
    }

    return (
        <div className="dailyContainer">
            <input type="checkbox" className="dailyCheckbox" id={daily.id} checked={isChecked} onChange={handleCheck}/>
            <label className="dailyName" htmlFor={daily.id}>
                <h4 className="dailyName">{dailyName.toUpperCase()}</h4>
            </label>
            <h4 className="deleteDailyBTN" onClick={() => deleteDaily(id)}>&#10005;</h4>
        </div>
    )
};

export default Daily;