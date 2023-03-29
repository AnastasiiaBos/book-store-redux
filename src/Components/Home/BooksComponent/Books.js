import { useState } from "react";
import { useSelector } from "react-redux";
import { booksData } from "../../data/booksData";
import { getSelectedGenre } from "../../redux/booksSlice";
import Book from "./Book";

const Books = () => {
    const [isModalVisible, setIsModalVisible] = useState(false); //состояние модального окна
    const selectedGenre = useSelector(getSelectedGenre); //получаем выбранный сейчас жанр
    const [selectedBook, setSelectedBook] = useState(); //получаем выбранную книгу, чтобы в модальном окне сказать, какая именно книга попала в корзину

    const bookAddedHandler = (selectedBookName) => {
        setIsModalVisible(true);
        setSelectedBook(selectedBookName);
        setTimeout(() => setIsModalVisible(false), 1000);
        //показываем модальное окно на 1 секунд, а после меняем его сост-е на false
    }

    return (
        <div className="container">
            {booksData
            .filter( book => {
                if ( selectedGenre === 'All') return true; // если выбран жанр 'All' покажи все книги
                return book.genre === selectedGenre; //покажи книги жанр, которых в booksData совпадает с выбранным пользователем 
            })
            .map( book => <Book book={book} onBookAdded={() => bookAddedHandler(book.name)} key={book.id} />)}
            <div className={`${isModalVisible && selectedBook? "show" : "hide"} bookAddedPhrase`}>
                <span className="modalAddedBookName">"{selectedBook}"</span> is added to your cart!
            </div>
        </div>
    )
};

export default Books;