import React from 'react';
import PropTypes from 'prop-types';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = ({cars, editCarId, onEditCar: editCar, onDeleteCar: deleteCar, onSaveCar: saveCar, onCancelCar: cancelCar,}) => {

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
  {cars.map(car => car.id === editCarId
    ? <EditCarRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar}/>
    : <ViewCarRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar}/>)}
    </tbody>
</table>
};

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: PropTypes.array,
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};

