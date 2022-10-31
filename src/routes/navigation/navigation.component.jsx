import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
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