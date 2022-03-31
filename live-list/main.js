/* Calcola la somma e la media dei primi 10 numeri. */
const shoppingListElemeent = document.querySelector(".shopping .list")
const shopping_list = ["pane","latte di avena","gelato"]

let index = 0;
while(index < shopping_list.length){

    const product = shopping_list[index]

    const li = document.createElement("li")
    li.append(product)
    shoppingListElemeent.append(li)

    index++
}


document.querySelector("form").addEventListener("submit", function(){
   event.preventDefault() 

   const newProduct = document.getElementById("product").value;
   

})