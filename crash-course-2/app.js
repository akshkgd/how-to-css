// js was a client side programming language => Node js
// hello
// apple
// codekaro
// 

// keywords => let, for, if, 
// hello

// var is depricated and should not be used anymore
// let user = 'yash';
// user = 'kumar varun';
// data types => string, number, boolean, arrays and objects

// let user = 'yash';
let age = 24;
let isUserOnline =false;  // true/false
// console.log(typeof isUserOnline);


//array => i can multiple items in one var => []

let items = ['bread', 'butter', 'milk', 'coffee'];
// items[0] = 'brown bread';
// items.push('apple', 'maggie');
// items.pop();
// items.pop();

// console.log(items)


// objects => key value pairs=> {}
let user = {
    name: 'yash',
    email: 'yas@gmail.com',
    mobile: 9876543210,
    salary: 55000
}
user.name = 'yash goel';
delete user.salary;
user.address = 'New Delhi'
// console.log(user)



let users = [
    {
    name: 'yash',
    email: 'yas@gmail.com',
    mobile: 9876543210,
    salary: 55000
},
{
    name: 'mayank',
    email: 'mayank@gmail.com',
    mobile: 9876543210,
    salary: 55000
}
]
// console.log(items.length)
// console.log(users)


const people = [
  { name: "Nishith Chatterjee", email: "krishnamurthyadvika@varkey.com", age: 32 },
  { name: "Kimaya Lal", email: "ayeshabuch@yahoo.com", age: 18 },
  { name: "Prerak Batra", email: "laganbala@chaudry.org", age: 41 },
  { name: "Mahika Rao", email: "vohralakshit@hotmail.com", age: 27 },
  { name: "Stuvan D’Alia", email: "kashvichar@gmail.com", age: 12 },
  { name: "Ojas Mangal", email: "arhaan66@vora.biz", age: 24 },
  { name: "Adira Amble", email: "tusharbakshi@boase.biz", age: 7 },
  { name: "Yakshit Datta", email: "advika50@bansal.org", age: 36 },
  { name: "Nikhil Bawa", email: "sanjaychaudhari@wanadoo.fr", age: 20 },
  { name: "Gauri D’Souza", email: "alokpant@wanadoo.fr", age: 42 },
  { name: "Rajeev Pathak", email: "jhaaryan@nair.info", age: 9 },
  { name: "Anvika Kapoor", email: "harshitabhattacharya@bhatt.org", age: 33 },
  { name: "Tanishi Khatri", email: "priyankajoshi@raman.com", age: 15 },
  { name: "Kartikeya Vohra", email: "rajendrajoshi@chaudry.biz", age: 28 },
  { name: "Harsha Mahajan", email: "rekhamahajan@yahoo.com", age: 40 },
  { name: "Aryaman Jain", email: "meghaarora@hotmail.com", age: 17 },
  { name: "Tanvi Raghavan", email: "sunitashah@parikh.com", age: 22 },
  { name: "Shanaya Pillai", email: "rajeshkapoor@anand.biz", age: 10 },
  { name: "Aarav Banerjee", email: "shivkapoor@pinto.org", age: 44 },
  { name: "Vanya Iyer", email: "goyaljash@wanadoo.fr", age: 26 },
  { name: "Kiaan Shetty", email: "rajatpatel@bansal.biz", age: 14 },
  { name: "Samaira Sinha", email: "kapoorriya@patel.org", age: 19 },
  { name: "Vivaan Bhagat", email: "shivakumar@wanadoo.fr", age: 31 },
  { name: "Rhea Chawla", email: "joshiashish@chaudry.org", age: 4 },
  { name: "Atharv Ghosh", email: "manishbhat@yahoo.com", age: 30 },
  { name: "Ishika Nair", email: "sunilparikh@gmail.com", age: 21 },
  { name: "Keshav Malhotra", email: "soniakapoor@sharma.biz", age: 8 },
  { name: "Aanya Mehta", email: "agarwalvihaan@patel.info", age: 23 },
  { name: "Rudra Khanna", email: "arorakian@gupta.biz", age: 37 },
  { name: "Diya Saxena", email: "rajibhat@yahoo.com", age: 29 },
  { name: "Arnav Rathi", email: "manishkashyap@chaudry.com", age: 16 },
  { name: "Meera Joshi", email: "ajaygoyal@raman.org", age: 27 },
  { name: "Parth Sharma", email: "pandayanish@chaudry.org", age: 13 },
  { name: "Saanvi Agarwal", email: "bhattmohan@yahoo.com", age: 6 },
  { name: "Krishna Desai", email: "rekhamalhotra@chaudry.biz", age: 43 },
  { name: "Reyansh Menon", email: "chowdhuryvaani@gmail.com", age: 25 },
  { name: "Ananya Verma", email: "anushakamath@gupta.com", age: 11 },
  { name: "Vihaan Bhandari", email: "shikhaagarwal@hotmail.com", age: 39 },
  { name: "Navya Gupta", email: "abhishekjain@vohra.org", age: 2 },
  { name: "Arya Reddy", email: "joshipalak@gupta.biz", age: 35 },
  { name: "Advait Kulkarni", email: "sharmasameer@parikh.com", age: 18 },
  { name: "Myra Chopra", email: "soniasharma@bansal.com", age: 41 },
  { name: "Rohan Mishra", email: "kaurpranav@chaudry.org", age: 7 },
  { name: "Aadhya Basu", email: "rajkumarpatel@vora.org", age: 28 },
  { name: "Dhruv Pandey", email: "arorapranav@patel.com", age: 34 },
  { name: "Kiara Gill", email: "kapoorarjun@yahoo.com", age: 9 },
  { name: "Ira Sengupta", email: "pandeyanvi@gupta.biz", age: 19 },
  { name: "Yash Dubey", email: "sharmasaurabh@chaudry.org", age: 38 },
  { name: "Siddhi Joshi", email: "kavitanayar@patel.com", age: 12 },
  { name: "Manan Trivedi", email: "rekhapatel@parikh.biz", age: 20 }
];

// console.log(people.length)
// array of objects =>arrays have index


let luckyWinnerIndex = Math.floor(Math.random()*people.length); 
// console.log('Lucky winner is :', people[luckyWinnerIndex].name)


let a;

// conditionals
// anything that is either true or fasle
// or that gets converted to true / false
// truthy and falsy
// falsy => 0 -1 null undefined '' ""
// if(a){
//     console.log('its true')
// }
// else{
//     console.log('its false')
// }


if(people[luckyWinnerIndex].age >=18){
    console.log(people[luckyWinnerIndex].name + "age: " + people[luckyWinnerIndex].age + " is eligible to vote!")
}
else{
    console.log(people[luckyWinnerIndex].name + "age: " + people[luckyWinnerIndex].age +  " is not eligible to vote!")

}