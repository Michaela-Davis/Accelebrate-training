import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const CarTool = (props) => {

  const [ carForm, change,] = useForm({
    id: '',
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  });

  const [ cars, setCars ] = useState(props.cars.concat());

  const addCar= () => {
    const nextId= Math.max(...cars.map(c => c.id), 0) +1
    setCars(cars.concat(carForm.car));
  };

  console.log(carForm.car);

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
        <input type="text" id='year-input' name='year'
          value={ carForm.year } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="color-input">color:</label>
        <input type="text" id='color-input' name='color'
          value={ carForm.color } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="price-input">price:</label>
        <input type="text" id='price-input' name='price'
          value={ carForm.price } onChange={ change }/>
      </div>
      <button type='button' onClick={addCar}>Add Car</button>
    </form>
  </>
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.string),
};