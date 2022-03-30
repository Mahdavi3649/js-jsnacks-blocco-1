
/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const listaNumber = []

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Type un numbers")); 
    listaNumber.push(number);
    console.log(listaNumber);
}

let sum = parseInt(listaNumber[0])
for(i = 0; i < listaNumber.length; i++){
    sum = sum + listaNumber[i]
}

console.log("The sum of all numbers entered: " + sum);

