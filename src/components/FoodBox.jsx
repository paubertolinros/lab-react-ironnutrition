import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {
  const { food: { name, image, calories, servings }, toDelete } = props;
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories:{calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => toDelete(name)}> Delete </Button>
      </Card>
    </Col>
  )
}
export default FoodBox;