import { Card, Col, Button } from "antd";

// Your code here
function FoodBox({food, deleteFood}) {
    return (
        <Col>
            <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
            
                <img src={food.image} height={60}/>
            
                <p>Calories: {food.calories}</p>
                <p>Servings {food.servings}</p>
            
                <p>
                <b>Total Calories: {food.servings} * {food.calories} </b> kcal
                </p>
            
                <Button onClick={() => deleteFood(food.id)}>Delete</Button>
            </Card>
        </Col>

    );
  }
  
  export default FoodBox;
  