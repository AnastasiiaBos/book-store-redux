import { useSelector } from "react-redux";
import { booksData } from "../../data/booksData";
import { getSelectedGenre } from "../../redux/booksSlice";
import Book from "./Book";

const Books = () => {
    const selectedGenre = useSelector(getSelectedGenre); //получаем выбранный сейчас жанр

    return (
        <div className="container">
            {booksData
            .filter( book => {
                if ( selectedGenre === 'All') return true; // если выбран жанр 'All' покажи все книги
                return book.genre === selectedGenre; //покажи книги жанр, которых в booksData совпадает с выбранным пользователем 
            })
            .map( book => <Book book={book} key={book.id} />)}
        </div>
    )
};

export default Books;