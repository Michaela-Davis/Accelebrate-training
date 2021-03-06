import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const EditCarRow = ({
  car,
  onSaveCar,
  onCancelCar,
}) => {
  
  const [ carForm, change ] = useForm({...car});

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  }

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" name='make' value={car.make} onChange={ change }/></td>
    <td><input type="text" name='model' value={car.model} onChange={ change }/></td>
    <td><input type="text" name='year' value={car.year} onChange={ change }/></td>
    <td><input type="text" name='color' value={car.color} onChange={ change }/></td>
    <td><input type="number" name='price' value={car.price} onChange={ change }/></td>
    <td>
      <button type='button' onClick={saveCar}>
        Save
      </button>
      <button type='button' onClick={onCancelCar}>
        Cancel
      </button>
    </td>
  </tr>
};

EditCarRow.propTypes = {
  car: PropTypes.object,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};  