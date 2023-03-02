import { Divider, Input } from 'antd';
import { useState } from 'react';

const FoodBox = ({addNewFood}) => {

  const initialState = {
    name: '',
    calories: '',
    image: '',
    servings: '',
  };

  const [newFood, setNewFood] = useState(initialState);

  const handleChange = (e) => {
    setNewFood(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewFood(newFood);
    setNewFood(initialState)
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}
export default FoodBox;
