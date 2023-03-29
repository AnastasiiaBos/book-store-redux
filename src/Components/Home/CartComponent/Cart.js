import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartIcon from '../../../img/cart.png';
import { emptyCart, getCartItems, getTotalCartPrice, getTotalCartQuantity  } from '../../redux/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector(getCartItems); 
    const totalCartPrice = useSelector(getTotalCartPrice);
    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const dispatch = useDispatch();

    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    //в корзине правильное окончание у общего числа книг

    return (
        <div className='cartWrapper'>
            <img onClick={() => setShowCart(!showCart)} className='icon iconCart' src={cartIcon} alt="Cart"/>

            {/* если showCart===true, т.е. пользователь нажал на корзину, то покажи корзину: */}
            {showCart && <div> 
                { cartItems.length === 0  /* если корзина пуста */
                ? <div className='cart'>
                    <h3>Your cart is empty</h3>
                </div>
                : <div className='cart'> {/* если корзина НЕ пуста */}
                    <h3>Your cart:</h3>
                    <div className='cartItemWrapper'> 
                        {cartItems.map( item => <CartItem cartItem={item} key={item.bookId}/>)}
                    </div>
                    <div className='cartTotal'>
                        <h3>Total:</h3>
                        <h3>{totalCartQuantity} {declOfNum(totalCartQuantity, ['item', 'items', 'items'])}</h3>
                        <h3>$ {totalCartPrice.toFixed(2)}</h3>
                    </div>
                    <div className='cartButtons'>
                        <button>CHECKOUT</button>
                        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> {/* очистить всю корину */}
                    </div>
                </div>
                }
            </div>
            }
        </div>
    )
};

export default Cart;