import Books from "./BooksComponent/Books";
import AllGenres from "./GenresComponent/AllGenres";

const Home = () => {
    return (
        <div>
            <AllGenres />
            <Books />
        </div>
    )
};

export default Home;