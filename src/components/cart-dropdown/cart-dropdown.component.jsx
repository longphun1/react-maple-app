import { useNavigate, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const path = useLocation()

    const close = () => dispatch(setIsCartOpen(!isCartOpen))


    const checkOutPage = () => {
        navigate('/checkout')
    }

    return (
        <Fragment>
            {path.pathname === '/shop' ?
                <div className='cart-dropdown-container'>
                    <div className='cart-items'>
                        {cartItems.length ? (
                            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                        ) : (
                            <img src='https://i.imgur.com/DW4gz2O.png' alt='https://i.imgur.com/DW4gz2O.png' className='empty-cart-message' />
                        )}
                    </div>
                    <Button onClick={checkOutPage}>Checkout</Button>
                </div>
                :
                <div onMouseLeave={close} className='cart-dropdown-container'>
                    <div className='cart-items'>
                        {cartItems.length ? (
                            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                        ) : (
                            <img src='https://i.imgur.com/DW4gz2O.png' alt='https://i.imgur.com/DW4gz2O.png' className='empty-cart-message' />
                        )}
                    </div>
                    <Button onClick={checkOutPage}>Checkout</Button>
                </div>
            }
        </Fragment>
    )
};

export default CartDropDown;