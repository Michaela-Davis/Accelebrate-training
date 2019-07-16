import React from 'react';
import PropTypes from 'prop-types';

export const ViewCarRow = ({car, onDeleteCar: deleteCar, onEditCar: editCar,}) => {
  
  return <tr>
  <td>{car.id}</td>
  <td>{car.make}</td>
  <td>{car.model}</td>
  <td>{car.year}</td>
  <td>{car.color}</td>
  <td>{car.price}</td>
  <td>
    <button type='button' onClick={() => editCar(car.id)}>Edit</button>
    <button type='button' onClick={() => deleteCar(car.id)}>Delete</button>
  </td>
</tr>
};

ViewCarRow.defaultProps = {
  car: {},
};

ViewCarRow.propTypes = {
  car: PropTypes.object,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};  