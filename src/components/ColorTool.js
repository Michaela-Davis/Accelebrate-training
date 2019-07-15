import React from 'react';
import PropTypes from 'prop-types';

export const ColorTool = (props) => {
  const colors = ['blue', 'chartreuse', 'teal', 'cyan', 'black'];

  return <header>
      <h1>Color Tool</h1>
        <ul>
          {props.colors.map((color, index) => <li key={index}> {color}</li>)}
        </ul>
    </header>;
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};