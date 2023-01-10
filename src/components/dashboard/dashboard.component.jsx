import CharacterList from "../characterList/characterList.component";
import WeeklyList from "../weeklyList/weeklyList.component";
import './dashboard.styles.scss'

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <h1>Daily Missions</h1>
            <CharacterList />
            <h1>Weekly Missions</h1>
            <WeeklyList />
        </div>
    )
};

export default Dashboard;