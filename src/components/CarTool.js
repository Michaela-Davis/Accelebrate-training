import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CarTool = () => {
  const cars = [
    {id:'1', make:'subaru', model:'legacy', year:'2003', color:'teal', price:'3500'},
    {id:'2', make:'subaru', model:'outback', year:'2012', color:'blue', price:'5000'}
  ];

  const [ 
    carForm, 
    setCarForm,
  ] = useState({
    id: '',
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  });


  const change = ({ target: {name, type, value} }) => {
    setCarForm({
      ...carForm,
      [ name ]: value === 'number'
        ? Number(value)
        : value,
    });
  };

  console.log(carForm);


  return <>
    <header>
      <h1>Car Tool</h1>
    </header>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => 
          <tr key={index}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
          </tr>
        )}
        </tbody>
    </table>
    <form>
      <div>
        <label htmlFor="make-input">make:</label>
        <input type="text" id='make-input' name='make'
          value={ carForm.make } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="model-input">model:</label>
        <input type="text" id='model-input' name='model'
          value={ carForm.model } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="year-input">year:</label>
        <input type="number" id='year-input' name='year'
          value={ carForm.year } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="color-input">color:</label>
        <input type="text" id='color-input' name='color'
          value={ carForm.color } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="price-input">price:</label>
        <input type="number" id='price-input' name='price'
          value={ carForm.price } onChange={ change }/>
      </div>
    </form>
  </>
};