//Getting HTML-elements for login
const loginform = document.getElementById('loginForm')
const loginMessage = document.getElementById('loginMessage')
const typedEmail = document.getElementById('email')
const typedPassword = document.getElementById('password')
const button = document.getElementById('button')


//Setting user for login
let name = 'John Doe'
let email = 'johndoe@example.com'
let password = 'Person'


//submit login function
function login(){
    if(typedEmail.value === email && typedPassword.value === password){
        loginMessage.innerHTML = `Logged in successfully! Welcome back ${name}`
        loginMessage.className = 'alert alert-success d-flex w-50'
    } else {
        loginMessage.innerHTML = 'Incorrect email or password. Please try again'
        loginMessage.className = 'alert alert-danger d-flex w-50'
    }
}

loginform.addEventListener('submit', function(e){
    e.preventDefault()
    login()
})









//Getting HTML-elements for contact
const contactForm = document.getElementById('contactForm')
const contactMessage = document.getElementById('contactMessage')
const contactButton = document.getElementById('contactButton')


function sendMessage(){
    contactMessage.className = 'alert alert-success d-flex w-50'
    contactMessage.innerHTML = 'Message sent'
}


contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    sendMessage()
})