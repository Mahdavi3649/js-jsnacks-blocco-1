/* SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

 const persons = ["Foster","Dale","Bush","Panekok","Daei","Santoro","Blincken"]
 console.log(persons);

 const last_name = prompt("Type your last name")
 console.log(last_name);

 let exist = false;

 for (let i = 0; i < persons.length; i++) {

     if(last_name === persons[i]){
         exist = true;
     } 
 }

 if(exist === true){
    console.log("You can participate in this Party");
 }else{
    console.log("Sorry, You can not participate in this Party");

 }