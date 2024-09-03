import './App.css';
import './component/Card.js';
import Card from './component/Card.js';
import { useState } from 'react';

function randomCard() {
  let card = [];
  let randomType = Math.floor(Math.random() * 10);
  
  if (randomType < 8) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < randomNumber; i++) {
      card[i] = Math.floor(Math.random() * 3);
    }
  } else {
    card[0] = 3;
  }
  return card;
}

export default function App() {
  
  const [items, setItems] = useState([
    { id: 1, value: [] },
    { id: 2, value: [] },
    { id: 3, value: [] },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0); 
  
  const regenerateCard = () => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        return prevItems.map((item, index) => {
          
          if (index === currentIndex) {
            let newCardValue = randomCard();
            return { ...item, value: newCardValue };
          } else {
            
            return item;
          }
        });
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval); 
      setCounter((prevCounter) => prevCounter + 1);
      setCurrentIndex((prevIndex) => {
        let newIndex = (prevIndex + 1) % 3;
        return newIndex;
      });
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
      <h2 className='counter'>Points : {counter}</h2>
      <button className='bouton' onClick={regenerateCard}>Regenerate</button>
      <button className='bouton-clear' onClick={clearAllCards}>Clear All</button>
    </div>
  );
}
