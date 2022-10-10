let product = [];
const productStringify = JSON.stringify(`${product}`);
localStorage.setItem("item",productStringify)
console.log(productStringify)
const recoveryProduct = JSON.parse(localStorage.getItem("item"))
console.log(recoveryProduct)

if(recoveryProduct == 0){
document.getElementById("cart__items").innerHTML = `<p> votre panier est vide </p>`;
}

// en cours : 
// else {
//     let cartItems = [];

//     for( let i = 0; i < localStorage.length; i++){
       
//         document.getElementById("cart__Items").innerHTML += 
//         `<!--  <article class="cart__item" data-id="${data._id}"data-color="${data.color}">
//         <div class="cart__item__img">
//           <img src="${data.imageURL}" alt=${data.altTxt}">
//         </div>
//         <div class="cart__item__content">
//           <div class="cart__item__content__description">
//             <h2>${data.name}</h2>
//             <p>${data.color}</p>
//             <p>${data.price}</p>
//           </div>
//           <div class="cart__item__content__settings">
//             <div class="cart__item__content__settings__quantity">
//               <p>Qté : </p>
//               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//             </div>
//             <div class="cart__item__content__settings__delete">
//               <p class="deleteItem">Supprimer</p>
//             </div>
//           </div>
//         </div>
//       </article> -->`
//       }
// }

