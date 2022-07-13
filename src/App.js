// src/App.js

import { Button, Col, Row } from 'antd';
import { useId } from 'react';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import foods from './foods.json';

function App() {
  //No usar useId como uso de keys
  const id = useId();
  const [showForm, setShowForm] = useState(true);
  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState([...foods]);

  const handleFilterList = (value) => {
    const filtered = food.filter((fd) =>
      fd.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFood(filtered);
  };

  const deleteFood = (name) => {
    const filtered = filteredFood.filter((fd) => fd.name !== name);
    const filteredOriginal = food.filter((fd) => fd.name !== name);
    setFilteredFood(filtered);
    setFood(filteredOriginal);
  };

  const createFood = (form) => {
    setFood([...food, { ...form }]);
    setFilteredFood([...filteredFood, { ...form }]);
  };

  const toggleShow = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Button onClick={toggleShow}>
        {showForm ? 'Hide Form' : 'Add new food'}
      </Button>
      {showForm && <AddFoodForm createFood={createFood} />}
      <SearchBar onChange={handleFilterList} />
      <h1>Food List</h1>
      <Row style={{paddingBottom:100}} justify="center">
        {filteredFood.length > 0 ? (
          filteredFood.map((fd, index) => {
            return (
              <FoodBox
                calories={fd.calories}
                image={fd.image}
                name={fd.name}
                servings={fd.servings}
                key={`${id}-${index}`}
                onDelete={deleteFood}
              />
            );
          })
        ) : (
          <img src="https://cdn.dribbble.com/users/308895/screenshots/2598725/no-results.gif" />
        )}
      </Row>
    </div>
  );
}
export default App;
