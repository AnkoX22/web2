
let users = [
    {username: "user1", password: "user1password"},
    {username: "user2", password: "user2password"}
];

function authanticatePassword(username, password) {

    username = String(username).trim();
    password = String(password).trim();

    if(!username || !password){
        return false;
    }

    const user = users.find(user => user.username === username);
    if( user && user.password === password){
        return true;
    }

    return false;
}

function handleSubmit(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(authanticatePassword(username, password)){
        window.location.href = "main.html";
    }
    else {
        const error = document.getElementById("error-message");

        error.textContent = "Invalid username or password!"
        error.style.color = "red";
        error.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("login-form");

    if(form){
        form.addEventListener("submit",handleSubmit);
    }
});