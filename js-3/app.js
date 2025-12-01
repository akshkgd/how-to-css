function test(){
    let heading = document.getElementById('heading');
    heading.innerText = 'Thanks for sharing the feedback!';
    let btn = document.getElementById('btn');
    btn.style.backgroundColor = 'blueviolet';
    // btn.style.display = 'none';
}
function register(){
    let name = document.getElementById('nameInput');
    console.log(name.value)
    let alert = document.getElementById('alert');
    let msg = 'Registration Succesful for ' + name.value;
    alert.innerText = msg
}

splitBill=()=>{
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = amount.value / persons.value;
    document.getElementById('bill').innerText = result


}
