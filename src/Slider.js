import { useState } from 'react';

export default function Slider ({slider}) {
    const [storeNumber, setStoreNumber] = useState(0);
    const {id, image, address, phone} = slider[storeNumber];

    const previouStore = () => {
        // setStoreNumber(storeNumber - 1);
        // if (storeNumber <= 0) {
        //     setStoreNumber(slider.length - 1);
        // }

        setStoreNumber(number => {
            number --;
            if (number < 0) {
                number = slider.length - 1;
            }
            return number;
        });
    };

    const nextStore = () => {
        // setStoreNumber(storeNumber + 1);
        // if (storeNumber >= slider.length - 1) {
        //     setStoreNumber(0);
        // }

        setStoreNumber(number => {
            number ++;
            if (number > slider.length - 1) {
                number = 0;
            }
            return number;
        });
    };

    return (
        <div>
            
            <div className="wrapperStore" key={id}>
                <iframe title="google" src={image} width="600" height="450" loading="lazy"></iframe>
                <p className="address">{id}. {address}</p>
                <p className="phone">{phone}</p>
            </div>
            <div className="btnContactWrapper">
                <button className="btn" onClick={previouStore}>Previous Store</button>
                <button className="btn" onClick={nextStore}>Next Store</button>
            </div>
        </div>
    )
}