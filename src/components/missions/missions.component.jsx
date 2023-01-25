import CharacterList from "../characterList/characterList.component";
import WeeklyList from "../weeklyList/weeklyList.component";

import './missions.styles.scss';

const Missions = () => {
    return (
        <div className="missions-container">
            <h1 className="mission-titles">Daily Missions</h1>
            <CharacterList />
            <h1 className="mission-titles">Weekly Missions</h1>
            <WeeklyList />
        </div>
    )
};

export default Missions;