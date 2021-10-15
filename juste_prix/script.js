const button = document.querySelector("#button");
const number2 = document.querySelector("#text");
const mySection = document.querySelector("#mySection");
const myDiv = document.querySelector("#myDiv");
const secondDiv = document.querySelector("#secondDiv");
const secondSection = document.querySelector("#secondSection")
const dateTime = document.querySelector("#dateTime")
dateTime.innerHTML = date;
function dateToday(){
    var todayDate = new Date();
    return todayDate;
}
var date = dateToday();
function random(){
    let random = Math.floor(Math.random() * 1000);
    return random
}
var number1 = random();
var invalid = document.createElement("p");
console.log(number1);
number2.addEventListener('keyup', () => {
    let textValue = number2.value
    
    if (isNaN(textValue)){
        invalid.style.backgroundColor = "red";
       invalid.innerHTML = "veuillez entrer un nombre svp";
       myDiv.appendChild(invalid);
    }
}
);
var big = document.createElement("p");
let count = 0;
button.addEventListener("click", () => {
    let textValue = number2.value
    console.log(textValue)
    if (textValue > 1000){
        big.style.backgroundColor = "red"
       big.innerHTML = "Votre nombre est trop grand !!!"
       myDiv.appendChild(big);
    }
    else if (textValue > number1){
        count++
        let toosmall = document.createElement("div");
    toosmall.classList.add("alert", "alert-warning");
    toosmall.setAttribute("role", "alert")
   toosmall.innerHTML = "#"+count+" C'est trop grand !!!";
   secondDiv.prepend(toosmall)
    }
    else if (textValue < number1){
        count++
        let tooBig = document.createElement("div");
        tooBig.classList.add("alert", "alert-danger");
        tooBig.setAttribute("role", "alert")
       tooBig.innerHTML = "#"+count+"C'est trop petit !!!";
       secondDiv.prepend(tooBig);
    } 
    else if (isNaN(textValue)){
        invalid.style.backgroundColor = "red";
       invalid.innerHTML = "veuillez entrer un nombre svp";
       myDiv.appendChild(invalid);
    }
    else{
        count++
        let goodPrice = document.createElement("div");
        goodPrice.classList.add("alert", "alert-success");
        goodPrice.setAttribute("role", "alert")
       goodPrice.innerHTML = "#"+count+"C'est le juste prix !!!";
       secondDiv.prepend(goodPrice);
    }
    
});
number2.addEventListener("keydown", () => {
    myDiv.removeChild(invalid);
    myDiv.removeChild(big)
});