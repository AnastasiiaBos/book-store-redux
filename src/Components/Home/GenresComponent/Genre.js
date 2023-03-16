import { useDispatch, useSelector }  from 'react-redux';
import { filterGenre, getSelectedGenre } from '../../redux/booksSlice';

const Genre = ({genreName}) => {
    const selectedGenre = useSelector(getSelectedGenre);  //получаем выбранный сейчас жанр
    const dispatch = useDispatch(); // при клике меняется стиль кнопки и класс (выбранного жанра)
    
    return (
        <p className={`${genreName === selectedGenre ? 'genreSelected btn' : 'btn'}`}
        onClick={() => dispatch(filterGenre(genreName))}> 
        {/* state.selectedGenre = genreName  */}
            {genreName}
        </p>
    )
};

export default Genre;
