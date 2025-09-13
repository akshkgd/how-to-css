// DOM
// Async js


function test(){
    let heading = document.getElementById('heading');
    heading.innerText = 'Javascript is Super Cool!'
    console.log(heading)
}

function updateName(){
    let input = document.getElementById('nameInput');
    document.getElementById('name').innerText = input.value
}


splitBill=()=>{
    let amount = document.getElementById('amountInput');
    let persons = document.getElementById('personsInput');
    let result = amount.value / persons.value;
    document.getElementById('bill').innerText = result + " Rs Each!"
    amount.value = ""
    persons.value = ""

}


let api ='https://www.omdbapi.com/?apikey=61e576a4&t=thor'

fetch(api).then((data)=>data.json()).then((data)=>{
    document.getElementById('poster').src = data.Poster;
    document.getElementById('title').innerText = data.Title;
    document.getElementById('desc').innerText = data.Plot;


})