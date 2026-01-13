//Getting HTML-elements
const loginform = document.getElementById('loginForm')
const message = document.getElementById('message')
const typedEmail = document.getElementById('email')
const typedPassword = document.getElementById('password')
const button = document.getElementById('button')


//Setting user
let name = 'John Doe'
let email = 'johndoe@example.com'
let password = 'Person'


//submit function
function login(){
    if(typedEmail.value === email && typedPassword.value === password){
        message.innerHTML = `Logged in successfully! Welcome back ${name}`
        message.className = 'alert alert-success d-flex w-50'
    } else {
        message.innerHTML = 'Incorrect email or password. Please try again'
        message.className = 'alert alert-danger d-flex w-50'
    }
}


loginform.addEventListener('submit', function(e){
    e.preventDefault()
    login()
})