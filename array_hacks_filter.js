const cars = [
  { make: 'Opel', class: 'Regular' },
  { make: 'Bugatti', class: 'Supercar' },
  { make: 'Ferrari', class: 'Supercar' },
  { make: 'Ford', class: 'Regular' },
  { make: 'Honda', class: 'Regular' },
];
const supercar = cars.filter(car => car.class === 'Supercar');
console.table(supercar); // returns the supercar class data in a table format


const cars2 = [
  { make: 'Opel', class: 'Regular' },
  null,
  undefined
];
const onlycars = cars2.filter(Boolean); // returns [{ make: 'Opel', class: 'Regular' }]
console.table(onlycars);
