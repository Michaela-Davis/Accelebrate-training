import React from 'react';

export const CarTool = () => {
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
        <tr>
          <td>1</td>
          <td>subaru</td>
          <td>legacy</td>
          <td>2003</td>
          <td>teal</td>
          <td>35000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>subaru</td>
          <td>outback</td>
          <td>2012</td>
          <td>blue</td>
          <td>5000</td>
        </tr>
      </tbody>
    </table>
  </>
};