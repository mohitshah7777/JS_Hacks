let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = ['f', 'g', 'h', 'i', 'j'];

console.log(list1.concat(list2)); // returns the merged values of both arrays, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//better way =>


let list3 = ['a', 'b', 'c', 'd', 'e'];
let list4 = ['f', 'g', 'h', 'i', 'j'];

console.log(list3.push.apply(list3, list4)); // returns 10, the new length of list3
console.log(list3); // returns ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
