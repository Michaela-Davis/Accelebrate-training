import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const CarForm = ({ buttonText, onSubmitCar, onDeleteCar }) => {
  const [ carForm, change, resetCarForm] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const submitCar = () => {
    onSubmitCar({...carForm});
    resetCarForm();
  };



  return     <form>
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
    <button type='button' onClick={submitCar}>{buttonText}</button>
  </form>
};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitCar: PropTypes.func.isRequired,
};