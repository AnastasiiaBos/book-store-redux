import { useDispatch, useSelector }  from 'react-redux';
import { filterGenre, getSelectedGenre } from '../../redux/booksSlice';

const Genre = ({genreName}) => {
    const selectedGenre = useSelector(getSelectedGenre);  //получаем выбранный сейчас жанр
    const dispatch = useDispatch(); // при клике меняется стиль кнопки и класс (выбранного жанра)
    
    return (
        <div className={`${genreName === selectedGenre ? 'genreSelected btn' : 'btn'}`}
        onClick={() => dispatch(filterGenre(genreName))}>
            <span> 
            {/* state.selectedGenre = genreName  */}
                {genreName}
            </span>
        </div>
    )
};

export default Genre;
