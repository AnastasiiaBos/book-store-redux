import { useDispatch } from 'react-redux';
import deleteIcon from '../../../img/delete.png'; 
import { addItemToCart } from '../../redux/cartSlice';
import { removeItemFromWishlist } from '../../redux/wishlistSlice';

const WishlistItem = ({wishlistItem, onBookAdded}) => {
    const dispatch = useDispatch();

    return (
        <div className="wishlistItem">
            <div className="wishlistItemBook">
                <img className="bookImgCart" src={require(`../../../../public/img/${wishlistItem.img}.jpg`)} alt="book" />
                <div className="cartItemBookDetails">
                    <p>{wishlistItem.author}</p>
                    <p className="bookNameWishlist">{wishlistItem.name}</p>
                </div>    
            </div>
            <div className="wishlistItemOrder">
                <p>$ {wishlistItem.price}</p>
                <div className="wishlistItemOrderDetails">
                    <button onClick={ () => {
                        dispatch(addItemToCart({id: wishlistItem.id, book: wishlistItem, quantity: 1}));
                        // книга из wishlist добавилась в корзину, там обновилось количество
                        onBookAdded();
                        dispatch(removeItemFromWishlist({wishlistItem}));
                        // и эта же книга из wishlistа удалилась
                    }}
                    className="wishlistAddToCartBtn">Add to cart</button>
                    <img onClick={() => dispatch(removeItemFromWishlist({wishlistItem}))} 
                    className="icon" src={deleteIcon} alt="delete"/>
                </div>
            </div>
        </div>
    )
};

export default WishlistItem;

