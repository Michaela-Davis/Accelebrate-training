import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

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
    setCars(cars.concat({...carForm, id:nextId}));
  };

  return <>
    <ToolHeader headerText='Car Tool'/>
    <CarTable cars={cars}/>
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