import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Register = () => {
    const [message, setMessage] = useState("");

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setMessage("Successfully Created Account.");
            })
            .catch((error) => {
                console.log(error);
                setMessage("This email already in use.");
            });
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <button>Register</button>
                <div>
                    Already registered? <Link to={"/login"}>Sign in</Link>
                </div>
                <div>{message}</div>
            </form>
        </div>
    );
};

export default Register;