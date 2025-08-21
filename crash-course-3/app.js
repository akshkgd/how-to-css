// es6 => ecma script 6
// functions => are tools to create similir task when we need
// arrow functions
// array map
// array filters

function grinder(items){
    console.log('grinding...', items)
}
// grinder('tomatoes');
// grinder('onions');


// function add(a,b){
//     console.log(a+b)
// }
// add(2,3)
// add(6,9)


// demo=()=>{console.log('arrow function')}
// demo()


// array map
let arr = [1,2,3,4,5,6,7,8];
// let sqrs = arr.map((n)=>n*n)
// let sqrs = arr.map(function(n){
//     return n*n
// })
// console.log(sqrs)


// let even = arr.filter((n)=>n%2==0)
// console.log(even)

// chaining

// let sqrs = arr.map((n)=>n*n).filter((n)=>n%2 == 0)
// console.log(sqrs)


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

let users = people.filter((user)=>user.age > 18).map(
    (user)=> user.name
)
console.log(users)