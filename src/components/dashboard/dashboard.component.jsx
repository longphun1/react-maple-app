import CharacterList from "../characterList/characterList.component";
import './dashboard.styles.css'

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <h1>Daily Missions</h1>
            <CharacterList />
        </div>
    )
};

export default Dashboard;