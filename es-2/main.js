
/* SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga */
 
const prima_parola = prompt("type your first word")
const seconda_parola = prompt("type your second word")

console.log(prima_parola, seconda_parola);

if(prima_parola.length > seconda_parola.length){
    console.log("la parola più lunga è: " + prima_parola);
} else if(prima_parola.length < seconda_parola.length){
    console.log("la parola più lunga è: " + seconda_parola);
} else{
    console.log("Le due parole hanno la stessa lunghezza");
}