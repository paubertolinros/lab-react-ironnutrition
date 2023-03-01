import { Divider, Input } from 'antd';
//new
//import foodList from '../foods.json';
import { useState } from 'react';

const FoodBox = (props) => {
  const { addFood } = props;
  //new
  // const [foodData, setfoodData] = useState(foodList);

  //new
  //  const initialState = {
  //   name: '',
  //   calories: '',
  //   image: '',
  //   servings: "",
  // }
  // const [newFood, setNewFood] = useState(initialState);


  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  //new
  // const handleChange = (e) => {
  //   setNewFood(prev => {
  //     return {
  //       ...prev,
  //       [e.target.name]:e.target.value
  //     }
  //   })
  // }

  const handleNameInput = e => setName(e.target.value);
  const handleCaloriesInput = e => setCalories(e.target.value);
  const handleImageInput = e => setImage(e.target.value);
  const handleServingsInput = e => setServings(e.target.value);
  
  //new
  // const handleSubmit = (e) => {
  //   e.preventDeault();
  //   const newFoodd = { newFood};
  //   addFood(newFoodd);
  //   setNewFood(initialState)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, servings };
    addFood(newFood);
    setName("");
    setCalories("");
    setImage("");
    setServings("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" name="name" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" name="image" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="text" name="calories" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="text" name="servings" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
    
  )
}
export default FoodBox;


{/* <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newFood.name} type="text" name="name" onChange={handleChange} />

      <label>Image</label>
      <Input value={newFood.image} type="text" name="image" onChange={handleChange} />

      <label>Calories</label>
      <Input value={newFood.calories} type="text" name="calories" onChange={handleChange} />

      <label>Servings</label>
      <Input value={newFood.servings} type="text" name="servings" onChange={handleChange} />

      <button type="submit">Create</button>
    </form> */}
