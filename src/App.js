import './App.css';
import './component/Card.js';
import Card from './component/Card.js';
import { useState } from 'react';

// Génére une carte random avec un nombre de fruits et un type (pomme, pain ou pomme de pin) 1 à 3 fruits/carte
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
  const [counter, setCounter] = useState(0);

  const regenerateCard = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, value: randomCard() } : item
      )
    );
    setCounter(counter + 1);
  };

  const clearAllCards = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, value: [] }))
    );
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>🍎🥖🥖</h1>
      <div className='content'>
        <div className="listCard">
          {items.map((item) => (
            <div key={item.id}>
              <Card values={item.value} />
              <button className='bouton' onClick={() => regenerateCard(item.id)}>Regenerate</button>
            </div>
          ))}
        </div>
        <h2 className='counter'>Counter: {counter}</h2> {/* Affichage du compteur */}
        <button className='bouton-clear' onClick={clearAllCards}>Clear All</button>
      </div>
    </div>
  );
}
