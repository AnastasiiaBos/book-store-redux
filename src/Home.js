import { useState } from "react"
import BooksList from "./BooksList";
import Buttons from "./Buttons";
import { data } from "./data";


export default function Home () {
    const [booksList, setBooksList] = useState(data);

    const filterBooks = (genreValue) => {
        const filteredBooksList = data.filter(book => book.genre === genreValue);
        setBooksList(filteredBooksList);
    };

    const showAllList = () => {
        setBooksList(data);
    };
    
    return (
        <div>
            Hello
            <Buttons filterBooks={filterBooks} showAllList={showAllList}/>
            <BooksList booksList={booksList}/>
        </div>
    )
}