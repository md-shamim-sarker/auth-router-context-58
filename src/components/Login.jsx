import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login Form</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <button>Register</button>
                <div>
                    Don't have an account. Please, <Link to={"/register"}>Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;