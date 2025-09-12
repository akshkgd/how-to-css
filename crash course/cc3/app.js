// variables, data types, arrays and objects
// conditionals, functions, ES6 => arrow functions, array map and filters

let name = 'mayank';
let age = 2;

// conditionals => any condition that is either true of false
// or gets converted to true or false

// if (age > 18)
//     console.log('eligible to vote')
// else 
//     console.log('not eligible to vote')

// truthy and falsy => 
    // falsy => 0 -0 "" '' undefined null



// functions 

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('milk, sugar and icecream');



function sum(a,b){
    console.log(a+b)
}

// sum(2,3)
// sum(12,45)


// ES6 => arrow functions
// nameOfFunction=()=>{}
sqr=(n)=>{console.log(n*n)}
// sqr(4)


// array map and filters
let arr = [1,2,3,4,5,6,7,8]

// let sqrs = arr.map(
//     // function for what i want to dos
// )



// let sqrs = arr.map(function (n){
//     return n*n
// })


// let sqrs = arr.map((n)=>n*n)
// let evens = arr.filter((a)=>a%2 == 0)
// console.log(evens);


const users = [
  { firstName: "Aarav", lastName: "Sharma", age: 24, gender: "Male" },
  { firstName: "Isha", lastName: "Verma", age: 22, gender: "Female" },
  { firstName: "Rohan", lastName: "Patel", age: 28, gender: "Male" },
  { firstName: "Kavya", lastName: "Reddy", age: 26, gender: "Female" },
  { firstName: "Arjun", lastName: "Gupta", age: 30, gender: "Male" },
  { firstName: "Meera", lastName: "Nair", age: 25, gender: "Female" },
  { firstName: "Dev", lastName: "Kapoor", age: 27, gender: "Male" },
  { firstName: "Priya", lastName: "Mishra", age: 23, gender: "Female" },
  { firstName: "Siddharth", lastName: "Chopra", age: 29, gender: "Male" },
  { firstName: "Ananya", lastName: "Joshi", age: 21, gender: "Female" },
  { firstName: "Vikram", lastName: "Rao", age: 31, gender: "Male" },
  { firstName: "Riya", lastName: "Singh", age: 24, gender: "Female" },
  { firstName: "Kunal", lastName: "Deshmukh", age: 27, gender: "Male" },
  { firstName: "Pooja", lastName: "Iyer", age: 25, gender: "Female" },
  { firstName: "Aditya", lastName: "Malhotra", age: 28, gender: "Male" },
  { firstName: "Sneha", lastName: "Banerjee", age: 26, gender: "Female" },
  { firstName: "Rahul", lastName: "Yadav", age: 29, gender: "Male" },
  { firstName: "Neha", lastName: "Pillai", age: 23, gender: "Female" },
  { firstName: "Manish", lastName: "Agarwal", age: 32, gender: "Male" },
  { firstName: "Sanya", lastName: "Chatterjee", age: 22, gender: "Female" }
];


// let names = users.map((user)=>user.firstName + " " + user.lastName)
let males = users.filter((user)=>user.gender == 'Female').map((user)=>user.firstName)
console.log(males)