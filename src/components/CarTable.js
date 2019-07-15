import React from 'react';
import PropTypes from 'prop-types';

import { ViewCarRow } from './ViewCarRow';

export const CarTable = (props) => {

  return <table>
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
  {props.cars.map((car, index) => 
    <ViewCarRow key={index} car={car}/>
    )}
    </tbody>
</table>
};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: PropTypes.array,
};

