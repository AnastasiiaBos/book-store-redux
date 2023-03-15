export default function BooksList ({booksList}) {
    return (
        <div className="container">
                {booksList.map(book => {
                    const {id, name, author, image, wiki, price} = book;

                    return <div className="bookWrapper" key={id}>
                        <img src={image} width="270px" height="435px" alt="book" />
                        <a className="bookName" href={wiki} rel="noreferrer" target="_blank">{name}</a>
                        <p className="bookAuthor">{author}</p>
                        <p className="bookPrice">$ {price}</p>
                    </div>
                })}
        </div>
    )
}