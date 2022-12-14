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

const Dashboard = () => {
    const [dailies, setDailies] = useState([])

    // extract a value from the entire redux store and able to use it in any components
    const currentUser = useSelector(selectCurrentUser) 

    const dailiesCollectionRef = collection(db, `userDailies/${currentUser.uid}/dailies`)

    const navigate = useNavigate();

    const signOut = () => {
        signOutUser();
        navigate('/login')
        console.log("exit")
    };

    const dailyRoute = () => {
        navigate('/add')
    }

    useEffect(() => {
        const getDailies = async () => {
            const data = await getDocs(dailiesCollectionRef);
            setDailies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        };

        getDailies();
    }, []);

    const deleteDaily = async (id) => {
        const dailyDoc = doc(db, `userDailies/${currentUser.uid}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload(false)
    }

    return (
        <div>
            <h1>home page {currentUser.uid}</h1>
            <form>
            <button onClick={signOut}>Sign out</button>
            <button onClick={dailyRoute}>Add</button>
            </form>
            {dailies.map((daily) => {
                return (
                    <div key={daily.id}>
                        <h2>{daily.name}</h2>
                        <button onClick={() => {
                            deleteDaily(daily.id)
                        }}> Delete</button>
                    </div>
                )
            })}
        </div>
    )
};

export default Dashboard;