import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar= (car) => {
    const nextId= Math.max(...cars.map(c => c.id), 0) +1
    setCars(cars.concat({...car, id:nextId}));
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const cancelCar = () => setEditCarId(-1);

  const replaceCar = (car) => {
    const newCars = cars.concat();
    const carIndex = cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  return <>
    <ToolHeader headerText='Car Tool'/>
    <CarTable cars={cars} editCarId={editCarId} onEditCar={setEditCarId} onDeleteCar={ deleteCar } onCancelCar={ cancelCar} onSaveCar={replaceCar}/>
    <CarForm buttonText='Add Car' onSubmitCar={ addCar }/>
  </>
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.string),
};