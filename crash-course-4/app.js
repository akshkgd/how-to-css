function feedback(){
    let heading = document.getElementById('heading');
    heading.innerText = 'Thanks for sharing your experience of the Crash Course!'
    let btn = document.getElementById('btn');
    btn.classList.add('hidden')
}

let users = []
function addUser(){
    let name = document.getElementById('userName');
    users.push(name.value);
    console.log(users);
    name.value = '';
    let usersContainer = document.getElementById('users')
    usersContainer.innerHTML = ''
    users.map((user)=>{
        let nameContainer = document.createElement('div');
        nameContainer.classList.add('bg-neutral-100', 'p-3','mb-3', 'rounded-xl')
        nameContainer.innerText = user
        usersContainer.appendChild(nameContainer);
    })
}

let api = 'https://www.omdbapi.com/?apikey={apiKey}=avengers';
fetch(api).then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data)
})