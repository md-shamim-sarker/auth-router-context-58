import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Registration Form</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <button>Register</button>
                <div>
                    Already registered. <Link to={"/login"}>Sign in</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;