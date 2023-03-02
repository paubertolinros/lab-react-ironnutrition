import './App.css';
import { useState } from 'react';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import NoContent from './components/NoContent';
import { Row, Divider, Button } from "antd";

function App() {
  const [food, setfood] = useState(foodList);
  const [searchValue, setSearchValue] = useState("");
  
  const handleAddNewFood = (newFood) => {
    setfood([...food, newFood]);
  };

  const handleSearchFood = (queryFood) => {
    setSearchValue(queryFood)
  };

  const [showHide, setShowHide] = useState(false);
  const handleShowHide = () => {
    setShowHide(prev => !prev);
  };

  const handleDeleteFood = (foodToDelete) => {
    const filteredFoods = [...food].filter((food) => food.name !== foodToDelete);
    setfood(filteredFoods)
  };

  return (
    <div className="App">
      {showHide && <AddFoodForm addNewFood={handleAddNewFood} />}
      <Button onClick={handleShowHide}> {showHide ? "Hide Form" : "Add New Food"} </Button>
      <Search searchFood={handleSearchFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.length === 0 ? <NoContent /> : food.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((elem, i) => {
            return <FoodBox food={elem} key={i} toDelete={handleDeleteFood} />
          })
        }          
      </Row>
    </div>
  );
}

export default App;
