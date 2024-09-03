import './App.css';
import './component/Card.js';
import Card from './component/Card.js';
import { useState } from 'react';

function randomCard() {
  let card = [];
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < randomNumber; i++) {
    card[i] = Math.floor(Math.random() * 3);
  }

  return card;
}

export default function App() {
  
  const [items, setItems] = useState([
    { id: 1, value: [] },
    { id: 2, value: [] },
    { id: 3, value: [] },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0); // Pour suivre l'index de la carte à régénérer
  const [counter, setCounter] = useState(0); 
  
  const regenerateCard = () => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item, index) =>
          index === currentIndex ? { ...item, value: randomCard() } : item
        )
      );
    }, 100); 

    setTimeout(() => {
      clearInterval(interval);
      setCounter(counter + 1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000); 
  };

  const clearAllCards = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, value: [] }))
    );
    setCounter(0);
    setCurrentIndex(0);
  };

  return (
    <div className="App">
      <h1>🍎🥖🥖</h1>
      <div className="listCard">
        {items.map((item) => (
          <div key={item.id}>
            <Card values={item.value} />
          </div>
        ))}
      </div>
      <h2>Regenerate Count: {counter}</h2>
      <button className='bouton' onClick={regenerateCard}>Regenerate</button>
      <button className='bouton-clear' onClick={clearAllCards}>Clear All</button>
    </div>
  );
}
