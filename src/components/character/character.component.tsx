import { useState } from "react";
import AddDailyForm from "../addDailyForm/addDailyForm.component";
import DailyList from "../dailyList/dailyList.component";
import './character.styles.scss'

type CharacterObject = {
    id: string
    characterClass: string
    characterName: string
}

type CharacterProps = {
    character: CharacterObject
}

const Character= ({ character }: CharacterProps) => {
    const { characterName, characterClass, id } = character;

    const [isShown, setIsShown] = useState(false)

    const handleToggleOn = () => {
        setIsShown(true)
    }

    const handleToggleOff = () => {
        setIsShown(false)
    }

    return (
        <div>
            <div className="characterBoxContainer">
                <div className="infoContainer">
                    {isShown ?
                        <div>
                            <h2 className="characterName">{characterName}</h2>
                            <h4 className="characterClass">{characterClass}</h4>
                            <span className="addDailyToggle" onClick={handleToggleOff}>&#8722;</span>
                            <AddDailyForm character_id={id} />
                        </div>
                        :
                        <div>
                            <h2 className="characterName">{characterName}</h2>
                            <h4 className="characterClass">{characterClass}</h4>
                            <span className="addDailyToggle" onClick={handleToggleOn}>&#43;</span>
                        </div>
                    }
                </div>
                <DailyList character_id={id} />
            </div>
        </div>
    )
};

export default Character;