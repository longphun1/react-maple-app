import AddDailyForm from "../addDailyForm/addDailyForm.component";
import DailyList from "../dailyList/dailyList.component";

const Character = ({character}) => {
    const { characterName, characterClass, id } = character;
    return (
        <div>
            <h2>{characterName}</h2>
            <h4>{characterClass}</h4>
            <DailyList id={id} />
            <AddDailyForm id={id} />
        </div>
    )
};

export default Character;