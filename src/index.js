import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = ['blue', 'chartreuse', 'teal', 'cyan', 'black'];


ReactDOM.render(
  <>
    <ColorTool colors={ colorList }/>
    <CarTool />
  </>,
  document.querySelector('#root'),
);