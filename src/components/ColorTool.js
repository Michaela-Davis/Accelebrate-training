import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

import { TextInput, NumInput, Button } from "./FormControls";
import { ToolHeader } from './ToolHeader';
import { UnorderedList } from './UnorderedList';

export const ColorTool = (props) => {

  const [ colorForm, change,] = useForm({
    color: '', hexcode: '',
  });

  const [ colors, setColors ] = useState(props.colors.concat());

  const addColor = () => {
    setColors(colors.concat(colorForm.color));
  };

  return <>
    <ToolHeader headerText='Color Tool'/>
    <UnorderedList items={colors} emptyListText="There are no colors.">
      {item=><b>{item.toUpperCase()}</b>}
    </UnorderedList>
    <form>
      <div>
        <label htmlFor="color-input">Color:</label>
        <TextInput id='color-input' name='color'
          value={ colorForm.color } onChange={ change }/>
      </div>
      <div>
        <label htmlFor="hexcode-input">hexcode:</label>
        <NumInput id='hexcode-input' name='hexcode'
          value={ colorForm.hexcode } onChange={ change }/>
      </div>
      <Button onClick={addColor}>Add Color</Button>
    </form>
  </>
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};