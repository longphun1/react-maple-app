import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.css'

const Navigation = () => {
    const { isCartOpen } = useContext(CartContext)

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
                        <Link className="nav-link" to='/shop'>
                            SHOP
                        </Link>
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;