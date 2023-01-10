import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './login.styles.scss';

const Login = () => {
    return (
        <div className="body">
            <div className="login-container">
                <SignInForm />
                <SignUpForm />
            </div>
        </div>
    )
};

export default Login;