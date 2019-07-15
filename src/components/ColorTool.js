import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const ColorTool = (props) => {

  const [ colorForm, change,] = useForm({
    color: '', hexcode: '',
  });

  const [ colors, setColors ] = useState(props.colors.concat());

  const addColor = () => {
    setColors(colors.concat(colorForm.color));
  };

  return <>
    <header>
        <h1>Color Tool</h1>
    </header>
    <ul>
      {colors.length=== 0 && <li>There are no colors.</li>}
      {colors.map((color, index) => <li key={index}> {color}</li>)}
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
      <button type='button' onClick={addColor}>Add Color</button>
    </form>
  </>
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};