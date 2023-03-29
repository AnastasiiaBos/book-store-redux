import { useDispatch } from 'react-redux';
import deleteIcon from '../../../img/delete.png'; 
import { removeItemFromCart, updateItemQuantity } from '../../redux/cartSlice';

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    return (
        <div className="cartItem">
            <div  className="cartItemBook">
                <img className="bookImgCart" src={require(`../../../../public/img/${cartItem.bookImg}.jpg`)} alt="book" />
                <div className="cartItemBookDetails">
                    <p>{cartItem.bookAuthor}</p>
                    <p className="bookNameCart">{cartItem.bookName}</p>
                    <p>$ {cartItem.bookPrice}</p>
                </div>    
            </div>

            <div className='cartItemPriceQuantityDetails'>
                
                <input className="cartItemInput" type="number" min="1" max="20" value={cartItem.quantity}
                onChange={(evt) => {
                    let inputValue = evt.target.value;
                    inputValue = Math.max(1, Math.min(20, Number(evt.target.value)));
                    //если пользователь вводит меньше 1, то записывается 1; больше 20 -20

                    if (!Number.isInteger(inputValue)) { //если пользователь вводит дробное число
                        inputValue = Math.round(inputValue); //то оно округляется в ближайшую сторону
                    }

                    dispatch(updateItemQuantity({id: cartItem.bookId, quantity: +inputValue}));
                    }}></input>
                {/* при выборе пользователем quantity активируется reducer updateItemQuantity c payload {
                id: cartItem.bookId - входной параметр id книги
                quantity: +evt.target.value - входной параметр - значение input - что ввел пользователь превращенное в число

                названия ключей: id и quantity должно совпадать с названием ключей в cartSlice -> updateItemQuantity
                } */}
            
                <p className="cartItemPrice">$ {cartItem.totalPrice.toFixed(2)}</p>
                <img
                    onClick={() => dispatch(removeItemFromCart({cartItem}))}
                    className="icon delete" src={deleteIcon} alt="delete"/>
            </div>
        </div>
    )
};

export default CartItem;