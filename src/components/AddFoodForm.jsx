// Your code here
import { useState } from 'react';
import { Divider, Input, Button } from "antd";

function AddFoodForm({addFood}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
          name,
          image,
          calories: Number(calories),
          servings: Number(servings),
        };
        addFood(newFood);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <div className="AddMovie">
            <Divider>Add Food Entry</Divider>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <Input type="text" name="name" value={name} onChange={() => setName(event.target.value)} />

                <label>Image: </label>
                <Input type="text" name="image" value={image} onChange={() => setImage(event.target.value)} />

                <label>Calories: </label>
                <Input type="number" name="calories" value={calories} onChange={() => setCalories(event.target.value)}/>

                <label>Servings: </label>
                <Input type="number" name="servings" value={servings} onChange={() => setServings(event.target.value)}  />
            
                <Button type="submit">Create</Button>
            </form>
        </div>
  );

// ...

  }
  
  export default AddFoodForm;
  