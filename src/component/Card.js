import './Card.css';
import painImage from '../assets/pain.png';
import pommeImage from '../assets/pomme.png';
import pomme2pinImage from '../assets/pomme2pin.png';
import tatin from '../assets/TarteTatin.png';
import compote from '../assets/Compote2pomme.png';
import grille from '../assets/GrillePain.png';
import olé from '../assets/PainOlé.png';
import perdu from '../assets/PainPerdu.png';
import vieux from '../assets/PainVieux.png';
import amour from '../assets/PommeAmour.png';
import choc from '../assets/painAuChocolat.png';

export default function Card({ values }) {
    const randomImages = [tatin, compote, grille, olé, perdu, vieux, amour, choc];

    const getImageForValue = (value) => {
        switch (value) {
            case 0:
                return painImage;
            case 1:
                return pommeImage;
            case 2:
                return pomme2pinImage;
            default:
                return randomImages[Math.floor(Math.random() * randomImages.length)];
        }
    };

    const isSpecialCard = () => {
        return values.some(value => randomImages.includes(getImageForValue(value)));
    };

    return (
        <div className={`card ${isSpecialCard() ? 'speciale' : ''}`}>
            {values.map((item, index) => (
                <img className='image' key={index} src={getImageForValue(item)} alt={`item-${item}`} />
            ))}
        </div>
    );
}
