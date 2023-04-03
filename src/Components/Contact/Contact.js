import { sliderData } from '../data/sliderData';
import Slider from './Slider';

export default function Contact () {

    return (
        <div className="wrapperContact">
            <h3>We are waiting for you in {sliderData.length} of our Bookstores:</h3>
            <Slider slider={sliderData}/>
        </div>
    )
}