import './App.css';
import { useState } from 'react';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from "antd";

function App() {
  const [food, setfood] = useState(foodList);
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((elem, i) => <FoodBox food={elem} key={i}/>)}
      </Row>


    </div>
  );
}

export default App;
