import { db } from "../../utils/firebase/firebase.utils";
import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkboxSelector } from "../../store/checkbox/checkbox.selector";
import { setCheckboxAction } from "../../store/checkbox/checkbox.action";
import './daily.styles.scss'

const Daily = ({daily, character_id}) => {
    const { dailyName, id } = daily;
    const checkbox = useSelector(checkboxSelector)
    const dispatch = useDispatch()

    const deleteDaily = async (id) => {
        const dailyDoc = doc(db, `charactersDailies/${character_id}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload(false)
    }

    return (
        <div className="dailyContainer">
            <input
                className="dailyCheckbox"
                id={daily.id}
                type="checkbox"
                checked={checkbox}
                onChange={() => dispatch(setCheckboxAction(daily.id))}
            />            
            <label className="dailyName" htmlFor={daily.id}>
                <h4 className="dailyName">{dailyName.toUpperCase()}</h4>
            </label>
            <h4 className="deleteDailyBTN" onClick={() => deleteDaily(id)}>&#10005;</h4>
        </div>
    )
};

export default Daily;