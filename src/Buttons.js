export default function Buttons ({filterBooks, showAllList}) {
    return(
        <div className="btnWrapper">
            <button className="btn" onClick={() => showAllList()}>All</button>
            <button className="btn" onClick={() => filterBooks('Novel')}>Novel</button>
            <button className="btn" onClick={() => filterBooks('Horror')}>Horror</button>
            <button className="btn" onClick={() => filterBooks('Fantasy')}>Fantasy</button>
            <button className="btn" onClick={() => filterBooks('Science fiction')}>Science fiction</button>
            <button className="btn" onClick={() => filterBooks('Adventure fiction')}>Adventure fiction</button>
        </div>
    )
}