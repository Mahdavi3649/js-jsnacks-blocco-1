/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const listNumber = []

for (let i = 0; i < 6; i++) {
    const number = parseInt(prompt("Insert your numbers"))

    if (number % 2 !== 0){
        listNumber.push(number)
    }
    
    console.log(listNumber);
}
console.log("The odd numbers that you inserted are: " + listNumber);