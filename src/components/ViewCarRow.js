import React from 'react';
import PropTypes from 'prop-types';

export const ViewCarRow = (props) => {
  return <tr>
  <td>{props.car.id}</td>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
</tr>
};

ViewCarRow.defaultProps = {
  car: {},
};

ViewCarRow.propTypes = {
  car: PropTypes.object,
};  