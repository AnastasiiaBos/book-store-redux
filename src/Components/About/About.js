import { useState } from "react"
import { aboutData } from "../data/aboutData";

export default function About () {
    const [showText, setShowText] = useState(true);

    const onClickShowText = (item) => {
        item.showMore = !item.showMore;
        setShowText(!showText);
    }

    return (
    <div className="wrapperAbout">
        <p className="textAbout">DyNasty began in 1982 under the aegis of its founders, Dima and Nastya.</p>
        <p className="textAbout">
        The first DyNasty Bookstore, found in 2018, was an updated version of the legendary bookstore, which 
        has been functioning at the Institute of Literary Research building.  Over 4 years we have grown into 
        4 great shops all over Warsaw, employing 38 people and having more than 4 thousands happy customers!
        </p>
        
        {aboutData.map((item, index) => {
            const {text, image, showMore} = item;
            return (
                <div key={index}>
                    <p className="textAbout">{showMore ? text.substring(0, 170) + '....' : text}
                        <button className="showBtn" onClick={() => onClickShowText(item)}>
                            {showMore === true ? 'Show More' : 'Show Less'}
                        </button>
                    </p>
                    <img className="imgAbout" src={image} width="800px" alt="Our Book store"/>
                </div>
            )
        })}
       
    </div>
    )
}