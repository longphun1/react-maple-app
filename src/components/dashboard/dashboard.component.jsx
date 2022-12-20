import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import CharacterList from "../characterList/characterList.component";

const Dashboard = () => {
    // extract a value from the entire redux store and able to use it in any components
    const currentUser = useSelector(selectCurrentUser) 

    const navigate = useNavigate();

    const signOut = () => {
        signOutUser();
        navigate('/login')
        console.log("exit")
    };

    const addCharacterRoute = () => {
        navigate('/addCharacter')
    }

    const addDailyRoute = () => {
        navigate('/addDaily')
    }

    return (
        <div>
            <h1>dashboard</h1>
            <CharacterList />
        </div>
    )
};

export default Dashboard;