import React from 'react';

export const CarTool = () => {
  const cars = [
    {id:'1', make:'subaru', model:'legacy', year:'2003', color:'teal', price:'3500'},
    {id:'2', make:'subaru', model:'outback', year:'2012', color:'blue', price:'5000'}
  ];

  return <>
    <header>
      <h1>Car Tool</h1>
    </header>
    <table>
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
        {cars.map((car, index) => 
          <tr key={index}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
          </tr>
        )}
        </tbody>
    </table>
  </>
};