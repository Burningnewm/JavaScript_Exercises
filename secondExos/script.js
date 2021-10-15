const button = document.querySelector("#myButton");
const myDiv = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(myDiv);
let button2 = document.createElement("input");
button2.type = "button";
button2.value = "affichez"
myDiv.appendChild(button2);
let text = document.createElement("p");
text.innerHTML = "joli boulot!!!";
myDiv.appendChild(text);
text.style.visibility = "hidden"

let count = 10;

button.addEventListener("click", () => {
    button.remove();
     setInterval(function(){
         if (count > 0 ){
            let newP = document.createElement("p");
            newP.innerHTML = count;
            myDiv.appendChild(newP);
            console.log("coucou");
            count--;
         }
         else {
            let newP = document.createElement("p");
            newP.innerHTML = "booom";
            myDiv.appendChild(newP);
            clearInterval();
         }
        }, 1000)
    });
    button2.addEventListener("click", ()=>{
        if (button2.value == "affichez"){
        text.style.visibility = "visible"
        button2.value = "cachez";
        }
        else {
            text.style.visibility = "hidden"
            button2.value = "affichez"
    }
});




