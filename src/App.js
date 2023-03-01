import './App.css';
import { useState } from 'react';
import foodList from './foods.json';

function App() {
  const [food, setfood] = useState(foodList);
  return (
    <div className="App">
      {food.map((elem, i) => {
        return (
        <div key={i}>
          <p>{elem.name}</p>
          <img src={elem.image} alt={elem.name} width={100} />
          </div>
          )
      })}
    </div>
  );
}

export default App;
