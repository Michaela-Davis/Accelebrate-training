import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());

  const addCar= (car) => {
    const nextId= Math.max(...cars.map(c => c.id), 0) +1
    setCars(cars.concat({...car, id:nextId}));
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return <>
    <ToolHeader headerText='Car Tool'/>
    <CarTable cars={cars} onDeleteCar={ deleteCar }/>
    <CarForm buttonText='Add Car' onSubmitCar={ addCar }/>
  </>
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.string),
};