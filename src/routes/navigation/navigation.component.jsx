import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.css'

const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img src="https://i.imgur.com/MDQOXmd.png" alt="logo" height='50px' width='160px'/>
                </Link>
                <div className="navlink-container">
                        <Link className="nav-link" to='/addCharacter'>
                            ADD CHARACTER
                        </Link>
                        <Link className="nav-link" to='/addWeekly'>
                            ADD WEEKLY
                        </Link>
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;