import { useState } from 'react';
import { useSelector } from 'react-redux';
import cartIcon from '../../../img/cart.png';
import { getCartItems, getTotalCartPrice, getTotalCartQuantity  } from '../../redux/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector(getCartItems); 
    const totalCartPrice = useSelector(getTotalCartPrice);
    const totalCartQuantity = useSelector(getTotalCartQuantity);

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
                    {cartItems.map( item => <CartItem cartItem={item} key={item.bookId}/>)}
                    <div className='cartTotal'>
                        <h3>Total:</h3>
                        <h3>{totalCartQuantity} item(s)</h3>
                        <h3>$ {totalCartPrice.toFixed(2)}</h3>
                    </div>
                    <button className="checkoutBtn">CHECKOUT</button>
                </div>
                }
            </div>
            }
        </div>
    )
};

export default Cart;