const button = document.getElementById("button");
const link = document.getElementById("lien")
const body = document.getElementsByTagName("body")[0];
const section = document.getElementsByTagName("section")[0];
const title = document.getElementsByTagName("h1")[0];
const stop = document.querySelector("#stop");
const reprendre = document.querySelector("#reprendre")
const mdp = document.querySelector("#mdp");
const mdp1 = document.querySelector("#mdp1");
const mdp2 = document.querySelector("#mdp2");

link.addEventListener("click", () => link.remove());

button.addEventListener("mouseover", () => body.style.backgroundColor = "blue");
button.addEventListener("mouseout", () => body.style.backgroundColor = "white");
title.addEventListener("click", (event) =>{alert("vous avez cliqué sur le titre!!!")
event.stopImmediatePropagation()});
section.addEventListener("click", () => alert("vous avez cliquez dans la section!!!"))

 let stopper = 1;

function changeColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
     button.style.backgroundColor =`rgb(${r},${g},${b})`;
     
};
let changeColorInterval = setInterval(changeColor, 2000);

stop.addEventListener("click", () =>{ 
    if (stopper == 1 ){
        clearInterval(changeColorInterval);
        stopper = 0; 
    } 
});
reprendre.addEventListener("click", () => {
    if (stopper == 0 ){
       changeColorInterval = setInterval(changeColor, 2000);
        stopper = 1;
    } 
});
mdp1.disabled = true;
mdp2.disabled = true;
mdp.value= "";
function password(){
    if (mdp.value !== ""){
        mdp1.disabled = false;
        mdp2.disabled = false;
        }
    else {
        mdp1.disabled = true;
        mdp2.disabled = true;
    }
}
mdp.addEventListener("keyup", ()=>{
    password()
});

