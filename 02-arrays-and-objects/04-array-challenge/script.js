const arr = [1, 2, 3, 4, 5];
x = arr.push(6);
x = arr.unshift(0);
x = arr.reverse();
console.log(arr);

// challenge2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);
