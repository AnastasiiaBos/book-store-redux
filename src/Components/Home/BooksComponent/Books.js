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
        setTimeout(() => { //показываем модальное окно на 3 секунды, а после меняем его сост-е на false
            setIsModalVisible(false)
        }, 3000);
    }

    return (
        <div className="container">
            {booksData
            .filter( book => {
                if ( selectedGenre === 'All') return true; // если выбран жанр 'All' покажи все книги
                return book.genre === selectedGenre; //покажи книги жанр, которых в booksData совпадает с выбранным пользователем 
            })
            .map( book => <Book book={book} onBookAdded={() => bookAddedHandler(book.name)} key={book.id} />)}
            <p className={`${isModalVisible && selectedBook? "show" : "hide"} bookAddedPhrase`}>"{selectedBook}" is added to your cart!</p>
        </div>
    )
};

export default Books;