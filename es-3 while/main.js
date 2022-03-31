
/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */



let number;
let somma = 0
let i = 1;
while(i <= 10){
    let number = parseInt(prompt("Type un numbers")); 
    somma = somma + number
    i++
}

console.log(somma);


