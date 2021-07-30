let entries = [1,[2,3],[4,5],7];
console.log("org arr", entries);

let flat_entries = [].concat(...entries);
console.log(flat_entries);
