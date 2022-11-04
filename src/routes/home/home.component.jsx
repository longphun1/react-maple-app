import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Home = () => {
    const auth = getAuth();
    const user = auth.currentUser

    const navigate = useNavigate()

    const signOut = () => {
        signOutUser();
        navigate('/')
        console.log("exit")
    };

    return (
        <div>
            <h1>home page {user.displayName}</h1>
            <form>
                <button onClick={signOut}>Sign out</button>
            </form>
        </div>
    )
};

export default Home;