import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  checkboxSelector,
  selectBossItems,
} from "../../store/checkbox/checkbox.selector";
import {
  addBossToList,
  setCheckboxAction,
  removeBoss,
} from "../../store/checkbox/checkbox.action";
import { WeeklyObject } from "../shared-types";
import "./weeklyCheckbox.styles.scss";

type WeeklyCheckboxProps = {
  character_id: string;
  weekly: WeeklyObject;
};

const WeeklyCheckbox = ({ weekly, character_id }: WeeklyCheckboxProps) => {
  const { id, weeklyName } = weekly;
  const checkboxes = useSelector(checkboxSelector);
  const bossItems = useSelector(selectBossItems);
  const dispatch = useDispatch();

  const unique_id = id + character_id;

  const handleSetCheckbox = () => {
    dispatch(setCheckboxAction(unique_id));

    if (checkboxes[unique_id]) {
      dispatch(removeBoss(bossItems, unique_id));
    } else {
      dispatch(addBossToList(bossItems, weekly, unique_id));
    }
  };

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
        <label className="checkbox-label" htmlFor={unique_id} />
      </div>
    </div>
  );
};

export default WeeklyCheckbox;
