import { Button, Card, Col, Divider, Input, Row } from 'antd';
import React from 'react';

const SearchBar = ({ onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }
  return (
    <div style={{width:"50%",margin:"50px auto"}}>
      <Divider>Search</Divider>
      <Input.Search onChange={handleChange} type="text"></Input.Search>
    </div>
  );
};

export default SearchBar;
