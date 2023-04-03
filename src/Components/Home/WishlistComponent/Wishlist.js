import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyWishlist, getWishlistItems } from "../../redux/wishlistSlice";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
    const wishlistItems = useSelector(getWishlistItems);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false); //состояние модального окна
    const [selectedBook, setSelectedBook] = useState(); //получаем выбранную книгу, чтобы в модальном окне сказать, какая именно книга попала в корзину


    const bookAddedHandler = (selectedBookName) => {
        setIsModalVisible(true);
        setSelectedBook(selectedBookName);
        setTimeout(() => setIsModalVisible(false), 1000);
        //показываем модальное окно на 1 секунд, а после меняем его сост-е на false
    }

    return (        
        <div>
            {wishlistItems.length === 0  /* если wishlist пуст */
            ? <div className="wishlistContainer">
                <h2>Your wishlist is empty</h2>
            </div>
            : <div className="wishlistContainer"> {/* если корзина НЕ пуста */}
                <h2>Your wishlist:</h2>
                <div> 
                    {wishlistItems.map(item => <WishlistItem wishlistItem={item} onBookAdded={() => bookAddedHandler(item.name)} key={item.id} />)}
                </div>
                <button className="emptyWishlist" onClick={() => dispatch(emptyWishlist())}>Empty Wishlist</button> {/* очистить всю корину */}
            </div>
            }
            <div className={`${isModalVisible && selectedBook? "showModal" : "hideModal"} bookAddedPhrase`}>
                <span className="modalAddedBookName">"{selectedBook}"</span> is added to your cart!
            </div>
        </div>
    )
};

export default Wishlist;