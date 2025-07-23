// console.log('hello world!');
// understanding the fundamentals of js
// usecases

// keywords
// variables
// arrays and objects
// conditionals
// functions
// DOM
// usecases



// hello, apple, iphone, parapaprapra?? mdksjkdf??
// keywords => any word which js engine can unsderstand => let, const, for, if 


// variable is a container used to store the vlaues



// datatypes => what type of value its storing
// string, numbers, boolean, arrays and objects

let name = 'yash';
let age = 30;
let isUserAlive = true; 

// arrays and objects
let items = ['rice', 'apple', 'coffee']
// console.log(items)
items[0] = 'milk'
// items.push('bread', 'jam')
items.pop()

// console.log(items)


// objects??

let user = {
    name: 'yash',
    age: 4,
    email: 'yash@gmail.com',
    mobile: 9876543210
}

// console.log(user)
user.name = 'varun kumar'
user.email = 'varun@gmail.com'
user.gender = 'male'
// console.log(user);



// const => to create variables
const  boy = 'yash'
const girl = 'yashika'



// console.log(boy + ' weds '+ girl)

// conditionals => 
    // you can vote if your age is 18+


// if(6>1){
//     console.log('true')
// }
// else{
//     console.log('false')
// }
// anything that you write in the condition is either true or false or gets converted
// to true or false



// if(user.age > 18){
//     console.log('eligible to vote')
// }
// else{
//      console.log('not eligible to vote')
// }



// functions

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('onion and garlic');


function sum(a, b){
    console.log(a+b)
}


// sum(2,3)
// sum(23,78)





function live(){
    let heading = document.getElementById('heading');
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
    heading.innerText = 'Thanks for joining the live Javascript Crash course!'
    console.log('live function called');
}


function bill(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
   let result = (amount.value / persons.value).toFixed(2);
   let billOutput = document.getElementById('billOutput');
   let formatedText = result + " Rs Each!"
   billOutput.innerText = formatedText;
}