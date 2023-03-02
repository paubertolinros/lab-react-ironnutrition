import './App.css';
import { useState } from 'react';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from "antd";

function App() {
  const [food, setfood] = useState(foodList);
  const [foodToDisplay, setfoodToDisplay] = useState(foodList);
  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    const updatedFoodToDisplay = [...foodToDisplay, newFood];
    setfood(updatedFood);
    setfoodToDisplay(updatedFoodToDisplay);
  }

  const searchFood = (queryFood) => {
    const foodFilter = food.filter(x => x.name.toLowerCase().includes(queryFood.toLowerCase()));
    setfoodToDisplay(foodFilter)
  }

  const [showHide, setShowHide] = useState(false);
  const handleShowHide = () => {
    setShowHide(prev => !prev);
  }

  const deleteFood = (foodToDelete) => {
    const filteredFoods = food.filter((food) => food.name !== foodToDelete);
    setfoodToDisplay(filteredFoods)
    setfood(filteredFoods)
  }

  return (
    <div className="App">
      {showHide && <AddFoodForm addFood={addNewFood} />}
      <Button onClick={handleShowHide}> {showHide ? "Hide Form" : "Add New Food"} </Button>
      <Search searchFood={searchFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodToDisplay.map((elem, i) => <FoodBox food={elem} key={i} toDelete={deleteFood} />)}
      </Row>
    </div>
  );
}

export default App;
