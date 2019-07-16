import React from 'react';
import PropTypes from 'prop-types';

import { ViewCarRow } from './ViewCarRow';

export const CarTable = ({cars, onDeleteCar: deleteCar,}) => {

  return <table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Color</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {cars.map((car, index) => 
    <ViewCarRow key={index} car={car} onDeleteCar={deleteCar}/>
    )}
    </tbody>
</table>
};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: PropTypes.array,
  onDeleteCar: PropTypes.func.isRequired,
};

