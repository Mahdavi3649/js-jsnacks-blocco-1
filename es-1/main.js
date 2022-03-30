/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */


const first_number = parseInt(prompt("type your first number"))
const second_number = parseInt(prompt("type your second number"))

console.log(first_number , second_number);

if(first_number > second_number){
    console.log("first number is biggar than second");
} else if(first_number < second_number){
    console.log("second number is biggar than first");
} else{
    console.log("Equal");

}