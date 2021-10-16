// to get all elements needed from DOM

const button = document.querySelector("#button");
const number2 = document.querySelector("#text");
const mySection = document.querySelector("#mySection");
const myDiv = document.querySelector("#myDiv");
const secondDiv = document.querySelector("#secondDiv");
const secondSection = document.querySelector("#secondSection");
const dateTime = document.querySelector("#dateTime");
const invalid = document.querySelector("#feedback");

// To get todays's date French format and add it to DOM

function dateToday(){
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let todayDate = new Date();
    todayDate = todayDate.toLocaleString('fr-FR', options);
    return todayDate;
}
let date = dateToday();
dateTime.innerHTML = date;

// to create random number from 0 to 1000

function random(){
    let random = Math.floor(Math.random() * 1000);
    return random
}

//To create new element with different arguments

function newElement(alert , answer){
    count++
    let findPrice = document.createElement("div");
    findPrice.classList.add("alert", alert);
    findPrice.setAttribute("role", "alert")
    findPrice.innerHTML = `#${count} ${answer}`;
    secondDiv.prepend(findPrice);
    invalid.style.display = "none";
}

// to customize element if input is too small

function tooSmall(){
    let alertType = 'alert-danger';
    let answers = "C'est trop petit !!!";
    newElement( alertType, answers);
}

// to customize element if input is too big

function tooBig(){
    let alertType = 'alert-warning';
    let answers = "C'est trop grand !!!";
    newElement( alertType, answers);
}

// to customize element if input is exact price

function goodPrice(){
    let alertType = 'alert-success';
    let answers = "C'est le Juste Prix!!!";
    newElement( alertType, answers);
    number2.setAttribute('disabled', '');
    button.setAttribute('disabled', '');
}

// To prevent invalid input while typing

number2.addEventListener('keyup', () => {
    let textValue = number2.value
    if (isNaN(textValue)){
       invalid.style.display = "block";
    }
});

// Initialize number of tries

let count = 0;

//Initialize random number

var number1 = random();

//Event to check wether input is valid, too small, too big or correct

button.addEventListener("click", () => {
    let textValue = number2.value
    if (textValue > 1000 || textValue == "" || isNaN(textValue)){
    invalid.style.display = "block";
    return;
}
    switch(true){
        case textValue > number1 :
            tooBig();
            break;
        case textValue < number1 :
            tooSmall();
            break;
        case  textValue == number1 :
           goodPrice();
            break; 
    }
});


