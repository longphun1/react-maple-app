import AddDailyForm from "../addDailyForm/addDailyForm.component";
import DailyList from "../dailyList/dailyList.component";
import './character.styles.css'

const Character = ({ character }) => {
    const { characterName, characterClass, id } = character;
    return (
        <div>
            <div className="characterBoxContainer">
                <div className="infoContainer">
                <h2 className="characterName">{characterName}</h2>
                <h4 className="characterClass">{characterClass}</h4>
                </div>
                <DailyList character_id={id} />
                <AddDailyForm character_id={id} />
            </div>
        </div>
    )
};

export default Character;