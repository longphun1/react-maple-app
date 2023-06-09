import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkboxSelector, selectBossItems } from "../../store/checkbox/checkbox.selector";
import { addBossToList, setCheckboxAction, removeBoss } from "../../store/checkbox/checkbox.action";
import './weeklyCheckbox.styles.scss'

const WeeklyCheckbox = ({ weekly, character_id }) => {
    const { id, weeklyName } = weekly;
    const checkboxes = useSelector(checkboxSelector)
    const bossItems = useSelector(selectBossItems)
    console.log(bossItems)
    const dispatch = useDispatch()

    const unique_id = id + character_id

    const handleSetCheckbox = () => {
        dispatch(setCheckboxAction(unique_id))
        
        if(checkboxes[unique_id]) {
            dispatch(removeBoss(bossItems, weekly))
        } else {
            dispatch(addBossToList(bossItems, weekly))
        }
    }

    return (
        <div className="checkbox-wrapper">
            
            <div className="round">
                <input
                    className="weeklyCheckbox"
                    type="checkbox"
                    checked={checkboxes[unique_id] || false}
                    onChange={handleSetCheckbox}
                    id={unique_id}
                />
                <label className="checkbox-label" for={unique_id} />
                
            </div>
        </div>
    )
};

export default WeeklyCheckbox;