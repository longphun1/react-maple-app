import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Dashboard = () => {
    const navigate = useNavigate();
    const signOut = () => {
        signOutUser();
        navigate('/')
        console.log("exit")
    };

    return (
        <div>
            <h1>home page</h1>
            <form>
                <button onClick={signOut}>Sign out</button>
            </form>
        </div>
    )
};

export default Dashboard;