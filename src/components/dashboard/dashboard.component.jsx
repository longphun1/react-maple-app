import CharacterList from "../characterList/characterList.component";
import WeeklyList from "../weeklyList/weeklyList.component";
import './dashboard.styles.css'

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <h1>Daily Missions</h1>
            <CharacterList />
            <h1 className="weeklyTitle">Weekly Missions</h1>
            <WeeklyList />
        </div>
    )
};

export default Dashboard;