import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Dashboard = () => {
    // extract a value from the entire redux store and able to use it in any components
    const currentUser = useSelector(selectCurrentUser) 
    const navigate = useNavigate();
    const signOut = () => {
        signOutUser();
        navigate('/')
        console.log("exit")
    };

    return (
        <div>
            <h1>home page {currentUser.email}</h1>
            <form>
                <button onClick={signOut}>Sign out</button>
            </form>
        </div>
    )
};

export default Dashboard;