import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const navigate = useNavigate()
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        navigate('/home')
    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                google sign in
            </button>
        </div>
    )
};

export default Navigation;