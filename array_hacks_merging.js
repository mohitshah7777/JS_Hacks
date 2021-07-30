let emp = {
 'id': 'EP01',
 'name': 'Pranjal',
 'age': 24,
 'addr': 'India'
};

let job = {
 'title': 'Data Scientist',
  'location': 'India'
};

// Using spread operator
let merged = {...emp, ...job};
console.log('Final merged', merged);
