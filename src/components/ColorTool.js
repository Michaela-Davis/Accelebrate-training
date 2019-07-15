import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorTool = (props) => {
  // const colors = ['blue', 'chartreuse', 'teal', 'cyan', 'black'];
  const [ 
    colorForm, 
    setColorForm,
  ] = useState({
    color: '',
    hexcode: '',
  });

  const change = ({ target: {name, type, value} }) => {
    setColorForm({
      ...colorForm,
      [ name ]: value === 'number'
        ? Number(value)
        : value,
    });
  };

  console.log(colorForm);

  return <>
    <header>
        <h1>Color Tool</h1>
    </header>
    <ul>
      {props.colors.length=== 0 && <li>There are no colors.</li>}
      {props.colors.map((color, index) => <li key={index}> {color}</li>)}
    </ul>
    <form>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id='color-input' name='color'
          value={ colorForm.color } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="hexcode-input">hexcode:</label>
        <input type="number" id='hexcode-input' name='hexcode'
          value={ colorForm.hexcode } onChange={ change }/>
      </div>
    </form>
  </>
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};