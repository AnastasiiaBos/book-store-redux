import Genre from "./Genre";

const allGenres = () => {
    return (
        <div className="btnWrapper">
            {['All', 'Science fiction', 'Novel', 'Horror', 'Fantasy', 'Adventure fiction']
            .map( (genre, index) => <Genre genreName={genre} key={index}/>)}
        </div>
    )
};

export default allGenres;