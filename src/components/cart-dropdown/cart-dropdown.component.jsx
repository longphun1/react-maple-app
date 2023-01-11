import { useNavigate, useLocation } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);

    const path = useLocation()

    const close = () => {
        setIsCartOpen(false)
    }

    const navigate = useNavigate()

    const checkOutPage = () => {
        navigate('/checkout')
    }

    return (
        <Fragment>
            {path.pathname === '/shop' ?
                <div className='cart-dropdown-container'>
                    <div className='cart-items'>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item} />
                        ))}
                    </div>
                    <Button onClick={checkOutPage}>Checkout</Button>
                </div>
                :
                <div onMouseLeave={close} className='cart-dropdown-container'>
                    <div className='cart-items'>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item} />
                        ))}
                    </div>
                    <Button onClick={checkOutPage}>Checkout</Button>
                </div>
            }
        </Fragment>
    )
};

export default CartDropDown;