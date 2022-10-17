import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const logOutHandler = () => {
        logOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className='header'>
            <Link to={"/"}>Home</Link>
            <Link to={"/orders"}>Orders</Link>
            {
                user?.uid
                    ? <Link onClick={logOutHandler}>Logout</Link>
                    : <Link to={"/login"}>Login</Link>
            }


        </div>

    );
};

export default Header;