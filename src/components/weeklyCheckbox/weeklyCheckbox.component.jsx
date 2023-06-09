import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkboxSelector } from "../../store/checkbox/checkbox.selector";
import { setCheckboxAction } from "../../store/checkbox/checkbox.action";
import './weeklyCheckbox.styles.scss'

const WeeklyCheckbox = ({ weekly, character_id }) => {
    const { id, weeklyName } = weekly;
    const checkboxes = useSelector(checkboxSelector)
    const dispatch = useDispatch()

    const unique_id = id + character_id

    return (
        <div className="checkbox-wrapper">
            
            <div className="round">
                <input
                    className="weeklyCheckbox"
                    type="checkbox"
                    checked={checkboxes[unique_id] || false}
                    onChange={() => dispatch(setCheckboxAction(unique_id))}
                    id={unique_id}
                />
                <label className="checkbox-label" for={unique_id} />
                
            </div>
        </div>
    )
};

export default WeeklyCheckbox;