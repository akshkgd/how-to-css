// hello, apple, coffee, lababa, fklsajdfsoa
// the words that the js understands is called keywords
// if let for map function


// variables => store data
let user = "dfks dsljflsfkls djfks";
let age = 25.6;
let email = 'yash@gmail.com'
user = 'yash goel'
let isOnline = "true";
// console.log(user, age,  email)



// data types
// console.log(typeof isOnline)


// arrays and objects
// primitive and non-primitive

let items = ['bread', 'butter', 'milk', 45, ['diary', 'pen']]
// console.log(items)
// items[0] = 'brown bread'
// items[3] = 'coffee'
// items.push('banana', 'coffee')
// items.pop();
// items.pop();
// items.splice() => index, delete count, new values
// items.splice(0, 1, 'rice', 'apple')
// items.splice(0, 2)
items.splice(1, 0, 'maggie')
// console.log(items)




// objects

let student = {
    name: 'yash',
    age: 30, 
    mobile: 9876543210,
    pinCode: 211009,
}
student.name = 'yash goel'
delete student.pinCode
student.email = 'yash@gmail.com'
// console.log(student)


// primitive => strings, boolean and numbers
// non-primitive => arrays and objects

let a = 5;
let b = a;
b = b+10

// console.log(a,b)

let arr = [1,2,3,4,5]
let arr1 = arr;
arr1.pop()

// console.log(arr, arr1)

// const name = 'codekaro'
// name = 'ashish'
// console.log(name)


// const boy = 'one'
// const  girl = 'two'

// console.log(boy + ' weds ' + girl)

// lucky winner program

const users = [
  { name: "Aarav Sharma", email: "aarav.sharma@example.com" },
  { name: "Priya Verma", email: "priya.verma@example.com" },
  { name: "Rohan Mehta", email: "rohan.mehta@example.com" },
  { name: "Ananya Gupta", email: "ananya.gupta@example.com" },
  { name: "Kunal Patel", email: "kunal.patel@example.com" },
  { name: "Sneha Iyer", email: "sneha.iyer@example.com" },
  { name: "Vikram Singh", email: "vikram.singh@example.com" },
  { name: "Neha Nair", email: "neha.nair@example.com" },
  { name: "Aditya Joshi", email: "aditya.joshi@example.com" },
  { name: "Simran Kaur", email: "simran.kaur@example.com" },
  { name: "Rahul Deshmukh", email: "rahul.deshmukh@example.com" },
  { name: "Pooja Reddy", email: "pooja.reddy@example.com" },
  { name: "Arjun Choudhary", email: "arjun.choudhary@example.com" },
  { name: "Divya Bhatia", email: "divya.bhatia@example.com" },
  { name: "Siddharth Malhotra", email: "siddharth.malhotra@example.com" },
  { name: "Meera Pillai", email: "meera.pillai@example.com" },
  { name: "Nikhil Kapoor", email: "nikhil.kapoor@example.com" },
  { name: "Shreya Das", email: "shreya.das@example.com" },
  { name: "Manish Yadav", email: "manish.yadav@example.com" },
  { name: "Ritika Saxena", email: "ritika.saxena@example.com" },
  { name: "Amit Tiwari", email: "amit.tiwari@example.com" },
  { name: "Ishita Ghosh", email: "ishita.ghosh@example.com" },
  { name: "Varun Khanna", email: "varun.khanna@example.com" },
  { name: "Kritika Jain", email: "kritika.jain@example.com" },
  { name: "Harsh Chauhan", email: "harsh.chauhan@example.com" },
  { name: "Tanvi Kulkarni", email: "tanvi.kulkarni@example.com" },
  { name: "Deepak Sinha", email: "deepak.sinha@example.com" },
  { name: "Mansi Agarwal", email: "mansi.agarwal@example.com" },
  { name: "Rajesh Kumar", email: "rajesh.kumar@example.com" },
  { name: "Aditi Mishra", email: "aditi.mishra@example.com" }
];


let winnerIndex = Math.floor(Math.random()*users.length)
console.log(users[winnerIndex].name)



// console.log(x)
// var x = 5;