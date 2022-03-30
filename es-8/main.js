/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const numUtente = prompt("Insert the 4-digit number")
console.log(numUtente);

let result = 0;
if (isNaN(numUtente)){
    alert("The text entered obligatorily must be a number");

} else if(numUtente.length > 4){
    alert("The number you entered has more than 4 digits");

}else if(numUtente.length < 4){
    alert("The number you entered has less than 4 digits");

}else{

    for (let i = 0; i < numUtente.length; i++) {
        result += (parseInt(numUtente[i]));
    }
     console.log("The sum of all digits the number you've entered is: " + result);


}

