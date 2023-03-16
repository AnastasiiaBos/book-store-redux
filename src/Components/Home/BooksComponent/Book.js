
const Book = ( {book} ) => {
    // const {id, name, author, image, wiki, price} = book; //можно сделать деструктуризацию, чтобы каэжый раз не писать book

    return (
        <div className="bookWrapper">
            <div className="imgWrapper">
                <img className="bookImg" src={require(`../../../../public/img/${book.img}.jpg`)} alt="book" />

                {/* всплывающее окно: add to cart, add to wish list */}
                <div className="buyButtonsWrapper">
                    <button >Add to cart</button>
                    <button >Save to favorites</button>
                </div>
            </div>
            <a className="bookName" href={book.wiki} rel="noreferrer" target="_blank">{book.name}</a>
            <p className="bookAuthor">{book.author}</p>
            <p className="bookPrice">$ {book.price}</p>
        </div>
    )
}

export default Book;