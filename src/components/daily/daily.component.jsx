import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { deleteDoc, doc } from "firebase/firestore";
import './daily.styles.scss'

const Daily = ({daily, character_id}) => {
    const [isChecked, setIsChecked] = useState(() => {
        return localStorage.getItem('checkbox') === 'true';
      });
    const { dailyName, id } = daily;

    useEffect(() => {
        localStorage.setItem('checkbox', isChecked);
      }, [isChecked]);

    const handleCheck = (event) => {
        setIsChecked(event.target.checked);
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