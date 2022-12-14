import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { 
    collection, 
    getDocs, 
    doc,
    deleteDoc 
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import DailyList from "../dailyList/dailyList.component";

const Dashboard = () => {
    const [dailies, setDailies] = useState([])

    // extract a value from the entire redux store and able to use it in any components
    const currentUser = useSelector(selectCurrentUser) 

    const navigate = useNavigate();

    const signOut = () => {
        signOutUser();
        navigate('/login')
        console.log("exit")
    };

    const addDailyRoute = () => {
        navigate('/add')
    }

    return (
        <div>
            <h1>home page {currentUser.uid}</h1>
            <form>
            <button onClick={signOut}>Sign out</button>
            <button onClick={addDailyRoute}>Add</button>
            </form>
            <DailyList />
        </div>
    )
};

export default Dashboard;