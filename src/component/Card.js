import './Card.css';
import painImage from '../assets/pain.png';
import pommeImage from '../assets/pomme.png';
import pomme2pinImage from '../assets/pomme2pin.png';

export default function Card({ values }) {
    const getImageForValue = (value) => {
        switch (value) {
            case 0:
                return painImage;
            case 1:
                return pommeImage;
            case 2:
                return pomme2pinImage;
            default:
                return null;
        }
    };

    return (
        <div className='card'>
            {values.map((item, index) => (
                <img className='image' key={index} src={getImageForValue(item)} alt={`item-${item}`} />
            ))}
        </div>
    );
}
