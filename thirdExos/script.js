let beautifulQuotes = [["L'amour est aveugle. La preuve, en le faisant il y a des gens qui braillent.","Jean Yanne"],["En amour, il n'y a que le premier faux pas qui coûte.","Albert Willemetz"],[" Seul l'amour peut garder quelqu'un vivant.", "Oscar Wildee"],["S'aimer soi-même, c'est l'assurance d'une longue histoire d'amour.", "Oscar Wilde"],["On devrait toujours être amoureux. C'est la raison pour laquelle on ne devrait jamais se marier.","Oscar Wildew"],[" La seule façon de se comporter avec une femme est de faire l'amour avec elle si elle est jolie, et avec une autre si elle ne l'est pas.", "Oscar Wildez"],["L'amour est un sacrement qui doit être pris à genoux.", "Oscar Wildek"],[" Les serments d'amour sont comme les voeux des marins, on les oublie après l'orage.","John Webster"],["L'amour fantasmé vaut bien mieux que l'amour vécu. Ne pas passer à l'acte, c'est très excitant.","Andy Warhol"],["La nécessité de l'amour est la seule qui soit vraiment belle. Arriver à cette connaissance, telle est la tâche de l'histoire du monde.", "Richard Wagner"],["L'amour est une étoffe tissée par la nature et brodée par l'imagination.", "François Marie Arouet, dit Voltaire"],["L'amour triomphe de tout.","Virgile"],["En amour, il ne s'agit pas d'aimer mais de préférer.","Louise Lévêque de Vilmorin"],["La Raison parle, mais l'Amour chante.", "Alfred de Vigny"],["L'Homme a toujours besoin de caresse et d'amour ... - Il rêvera partout à la chaleur du sein.", "Alfred de Vigny"]];

const firstP = document.getElementById("firstP");
const secondP = document.querySelector("#secondP");
const myDiv = document.getElementById("myDiv");
const button = document.querySelector("#myButton");
function random(array){
    return Math.floor(Math.random() * array.length);
}
let n ;
function randomQuote(){
    
     do {
        var i = random(beautifulQuotes);
        
     }
     while (i === n);
     
     firstP.getElementsByTagName("span")[0].innerHTML = beautifulQuotes[i][0];
     secondP.innerHTML = beautifulQuotes[i][1]; 
     console.log(i);
     n = i;
     
     console.log(n);
    }
button.addEventListener('click', ()=> randomQuote());

