// // Array in Js
// => Collection of elements
// => List of different data type
// => Array can contain more than one data,
// => Array is always enclosed with square brackets [ ]

// var arr = [10, 20, 30, "hello", true, null ];

// console.log(arr);

// Accessing the data in the array
// We can access the array using the index value , [0]
// index value is always start from ( 0 ) end n - 1 => 5
// length is always start from ( 1 )

// var arr = [10, 20, 30, "hello", true, null];
// console.log(arr[5]);
// console.log(arr.length);

// Adding the new elements in the array

// var arr = [10, 20, 30, "hello", true, null];
// arr[6] = 23;
// console.log(arr);
// push , unshift
// push => Add the element at the end
// unshift => Add the element at the beginning
// arr.push(1);
// console.log(arr);
// arr.unshift(["100"]);
// console.log(arr);

// Modifying the array elements
// var arr = [10, 20, 30, "hello", true, null ];
// arr[3] = "Developer"
// console.log(arr);

// Removing the elements in the array
// var arr = [10, 20, 30, "hello", true, null];
// pop , shift
// pop => Remove the element at the end.
// shift => Remove the element at the beginning.
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// Objects
// => Collection of Properties
// => each properties have ( key and value )
// => more than one elements,
// => List of different dataType,
// => object is always enclosed with curly bracket { }

// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 20,
//   learning: true,
//   classMate: ["Ajay", "Ponmayil"],
//   things: { mobile: "Iphone", laptop: "HP" },
// };

// Accessing the properties in object
// dot (.) , bracket []

// dot notation ( . )
// console.log(obj.classMate[1]);

// bracket notation [ ]
// console.log(obj["class"]);
// console.log(obj.things["laptop"]);

// Adding the properties in object
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 20,
//   learning: true,
//   classMate: ["Ajay", "Ponmayil"],
//   things: { mobile: "Iphone", laptop: "HP" },
// };
// obj.class = 2025;
// console.log(obj);

// Modifying
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 20,
//   learning: true,
//   classMate: ["Ajay", "Ponmayil"],
//   things: { mobile: "Iphone", laptop: "HP" },
// };

// obj.classMate[0] = "str";
// console.log(obj);

// Remove
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: 20,
//   learning: true,
//   classMate: ["Ajay", "Ponmayil"],
//   things: { mobile: "Iphone", laptop: "HP" },
// };

// delete obj.learning;

// console.log(obj);

// Arrow function nameless function () => { }

// var a = (str) => {
//   console.log(str);
// };

// a("Revamp");
// a(123);

// Callback function
// => If the function is passed as an argument to the another function is called call back function

function add(p) {
  console.log(p());
}

add(() => {
  console.log("Call back fuction");
});