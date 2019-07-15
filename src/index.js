import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = ['blue', 'chartreuse', 'teal', 'cyan', 'black'];
const cars = [
  {id:'1', make:'subaru', model:'legacy', year:'2003', color:'teal', price:'3500'},	    
  {id:'2', make:'subaru', model:'outback', year:'2012', color:'blue', price:'5000'},
];

ReactDOM.render(
  <>
    <ColorTool colors={ colorList }/>
    <CarTool cars={cars}/>
  </>,
  document.querySelector('#root'),
);