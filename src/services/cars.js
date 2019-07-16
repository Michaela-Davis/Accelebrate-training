

export const getAllCars = () => {

  return fetch('http://localhost:3050/cars')
    .then(res => res.json());
};

export const appendCar = car => {
  return fetch('http://localhost:3050/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(car),
  })
    .then(res => res.json());
};