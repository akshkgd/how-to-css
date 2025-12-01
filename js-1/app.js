// keywords, variables, datatypes
// arrays and objects
// conditionals
// loop and functions


// interaction

// apple, coffee, hulili, dsjksadjask
// let, if, for, else, 
// let and const , var

// let name  = "yash";
// let age = 24;
// let isUserAlive = false;




// data types

// console.log(typeof isUserAlive)


// const bride = 'nidhi';
// const groom = 'kunal'
// bride = 'ramya'

// console.log(bride, ' weds ', groom)


// arrays and objects

let items = ['bread', 'coffee', 'butter'];
// index => read, update, delete
// items[1] = 'apple';
// items.push('milk', 'jam');
items.test = 'dsajdjkajds'
// console.log(items);


// let user = ['sayed', 'sayed@gmail.com', 67000, 200334, 9876543210]

let user = {
    name: 'naved',
    email: 'naveed@gmail.com',
    inhand: 67000,
    pinCode: 211998,
}
user.name = 'sayed Naveed';
user.address = 'New Delhi';
delete user.pinCode;
// console.log(typeof user)



// conditionals
let name = 'arpit';
let age = 2;

// anything that is either true or false or that gets converted to true or false
// if(0){
//     console.log('statement is true')
// }
// else{
//     console.log('statement is false')
// }
// truthy and falsy
// falsy => 0 -0 "" '' undefined null


// if(age>18){
//     console.log('you are eligible to vote in bihar')
// }
// else{
//     console.log('not eligible to vote')
// }



// array of objects

let a = [1,2,3,4,5]
// let user = {name: 'yash', age: 24, gender: 'male'}


let users = [
    {name: 'riya', age: 22, gender: 'female'},
    {name: 'arjun', age: 27, gender: 'male'},
    {name: 'sneha', age: 25, gender: 'female'},
    {name: 'vikas', age: 29, gender: 'male'},
    {name: 'megha', age: 23, gender: 'female'},
    {name: 'karan', age: 30, gender: 'male'},
    {name: 'tina', age: 21, gender: 'female'},
    {name: 'rohit', age: 26, gender: 'male'},
    {name: 'poonam', age: 28, gender: 'female'},
    {name: 'rahul', age: 24, gender: 'male'},
]

console.log(users[2].name)