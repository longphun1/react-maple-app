import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkboxSelector } from "../../store/checkbox/checkbox.selector";
import { setCheckboxAction } from "../../store/checkbox/checkbox.action";
import './weeklyCheckbox.styles.scss'

const WeeklyCheckbox = ({weekly_id, character_id}) => {
    const checkboxes = useSelector(checkboxSelector)
    const dispatch = useDispatch()

    const unique_id = weekly_id + character_id

    return (
        <input
            className="weeklyCheckbox"
            type="checkbox"
            checked={checkboxes[unique_id] || false}
            onChange={() => dispatch(setCheckboxAction(unique_id))}
            id={unique_id}
        />
    )
};

export default WeeklyCheckbox;