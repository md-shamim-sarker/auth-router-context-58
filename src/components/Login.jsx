import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate("/");
            }).catch((error) => {
                console.log(error);
            });

    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <button>Sign In</button> or

            </form>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <div>
                Don't have an account? Please, <Link to={"/register"}>Register</Link>
            </div>
        </div>
    );
};

export default Login;