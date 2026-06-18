// Spread operator ( ... )
// => Unpack the group of elements into the individual elements.
// => we use both array and object

// var arr = [10, 20, 30, 40, 50];
// console.log( ...arr);

// Copy
// var arr = [10, 20, 30, 40, 50];
// var arr1 = [ ...arr];
// console.log(arr1);  

// concatenation
// var arr1 = [10, 20, 30, 40, 50];
// var arr2 = [0];
// console.log([...arr1, ...arr2]);

// object
// let mark = {
//   maths: 80,
//   social: 80,  
// };

// let total = {
//   total: 160,
//   ...mark,
// };

// let value = {
//   ...mark,
//   ...total,
// };
// console.log(total);

// Rest operator ( ... )
// => It packs the elements into the single element.
// => Function parameter and destructuring.
// => A rest parameter must be (last in a parameter list)
// => Retrun arry of elements

// function add(a, ...d) {
//   console.log(a, ...d);
// }

// add(10, 20, 30, 40, 50);

//String Method:
// let str = "Hello world";
// let str1 = str.trimStart();
// console.log(str.length);
// console.log(str);
// console.log(str1);
// console.log(str1.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(" ")); // array
// console.log("Mr ".concat(str));
// console.log(str.lastIndexOf("o"));
// console.log(str.replace("world", "Developer"));

// Destructuring
// => array , object

// Array Destructuring
// var arr = [1, 2, 3, 4, 5, 6];

// var [a, b, ...c] = arr;

// var a = arr[0];
// var b = arr[1];
// var c = a + b;
// console.log(a + b, ...c);

// output = 3

// Object Destructuring
// let user = {
//   name: "peter parker",
//   email: "peter@gamil.com",
//   password: "Perter@123",
//   age: "21",
//   status: "Single",
// };

// let { email, password } = user;

// console.log(email, password);

// Array Method
// map , filter and Reducer

// Map  => return array of element

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var data = arr.map((e) => {
//   console.log(e);
//   return e;
// });

// console.log(data);

// Filter  => return array of elements
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var filterData = arr.filter((e) => e % 2 != 0);
// console.log(filterData);

// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     // console.log(data.users);
//     var filterData = data.users.filter((e) => e.id <= 3);
//     console.log(filterData);
//   } catch (error) {
//     console.log(`Internal server error ${error}`);
//   }
// }

// fetchData();

// Reducer
// var arr = [45];

// var reducer = arr.reduce((accumulator, currentvalue) => {
//   console.log(accumulator, currentvalue);
//   return accumulator + currentvalue;
// });

// console.log(reducer);