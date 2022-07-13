import { Button, Card, Col, Row } from 'antd';
import React from 'react';

const FoodBox = ({name,calories,image,servings,onDelete}) => {
  return (
      <Card
        hoverable
        title={name}
        style={{ minWidth: 230, height: 300, margin: 10, flex:1, maxWidth:300 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={()=>onDelete(name)} type="primary"> Delete </Button>
      </Card>
  );
};

export default FoodBox;
