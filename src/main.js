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









//Getting HTML-elements for contact + toast/modal
const contactForm = document.getElementById('contactForm')
const contactMessage = document.getElementById('contactMessage')
const contactButton = document.getElementById('contactButton')
const contactEmail = document.getElementById('emailGroup')
const contactTextarea = document.getElementById('messageContainer')


function sendMessage(){
    contactMessage.className = 'alert alert-success d-flex w-50'
    contactMessage.innerHTML = 'Message sent successfully'
    contactButton.innerHTML = 'Send Message'
    contactEmail.value = ''
    contactTextarea.value = ''
    setTimeout(function(){
        contactMessage.className = 'd-none'
    }, 3000);
}


function autoAdjust (e){
    e.style.height = 'inherit'
    e.style.height = (e.scrollHeight) + 'px'
}


function spinner(){
    contactButton.innerHTML = '<i class="bi bi-hourglass" id="spinningIcon"></i>'
    const icon = document.getElementById('spinningIcon')
    if(icon) {
        icon.style.display = 'inline-block'
        icon.style.animation = 'spinner infinite 1s linear'
    }
}

contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    //Adding modal
    const toastElement = document.getElementById('modal')
    const toast = new bootstrap.Toast(toastElement)
    toast.show()

    spinner()
    setTimeout(sendMessage, 5000);
})








//adding tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




//Adding popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))