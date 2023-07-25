import { db } from "../../utils/firebase/firebase.utils";
import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkboxSelector } from "../../store/checkbox/checkbox.selector";
import { setCheckboxAction } from "../../store/checkbox/checkbox.action";
import './daily.styles.scss';

type DailyObjects = {
    id: string
    dailyName: string
}

type DailyProps = {
    character_id: string
    daily: DailyObjects
}

const Daily = ({ daily, character_id }: DailyProps) => {
    const { dailyName, id } = daily;

    const checkboxes = useSelector(checkboxSelector)
    const dispatch = useDispatch()

    const deleteDaily = async (id: string) => {
        const dailyDoc = doc(db, `charactersDailies/${character_id}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload()
    }

    return (
        <div className="dailyContainer">
            <input
                className="dailyCheckbox"
                id={daily.id}
                type="checkbox"
                checked={checkboxes[daily.id] || false}
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