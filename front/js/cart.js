
// récupère le panier du localstorage
const item = JSON.parse(localStorage.getItem("item")) || [];

//insertion HTML
function displayItems(items) {
    const cartItems = document.getElementById("cart__items");
    cartItems.innerHTML += `
    <article class="cart__item" data-id="${items._id}">
                <div class="cart__item__img">
                  <img src="${items.imageUrl}" alt="${items.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${items.name}</h2>
                    <p>${items.price} €</p>
                    <p>${items.colors}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${items.quantity}">
                      </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;

}

//affichage des produits qui affiche aussi les données de chaque produit
for (items of item) {
    displayItems(items);
    console.log(items);
}

// // class avec les éléments des articles
class Item {
    constructor(colors, id, name, prix, imageUrl, description, altTxt) {
        this.colors = colors;
        this._id = id;
        this.title = name
        this.price = prix;
        this.imageUrl = imageUrl;
        this.description = description;
        this.altTxt = altTxt;

    }
}

class Cart {
    // [{name, id, quantity}, {name, id, quantity}]


    constructor(items) {

        if (items) {
            this.items = item;
        }
    }

    add(items) {

        let foundProduct = this.items.find(p => p.id == items.id && p.colors == items.colors)
        if (foundProduct != undefined) {
            foundProduct.quantity++;
        } else {
            items.quantity = 1;
            this.items.push(items);
        }

    }
    remove(items) {

        this.cart = this.items.filter(p => p.id != items.id);

    }
    changeQuantity(items, quantity) {

        const foundProduct = this.items.find(p => p.id == items.id);
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity;

            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);

            }
        }
    }

    getNumberProduct() {

        let number = 0;
        for (let items of this.items) {
            number += items.quantity;
        }
        return number;
    }

    
 
    
} 
// affixhe le prix du panier
function getTotalPrice() {

        let total = 0;
        for (let items of item) {
            total += items.quantity * items.price;
            
        }
        return total;

    }
    const totalPrice = document.getElementById("totalPrice");
totalPrice.innerHTML += `<span id="totalQuantity">${getTotalPrice()}</span>`;
   
//affiche le nombre d'article dans le panier
function getNumberProduct() {

    let number = 0;
    for (let items of item) {
        number += items.quantity;
    }
    return number;
}
const totalQuantity = document.getElementById("totalQuantity");
totalQuantity.innerHTML += `<span id="totalQuantity">${getNumberProduct()}</span>`;


// supprime un article du panier
function deleteItem() {
    const deleteBtn = document.getElementsByClassName("deleteItem");
    console.log(deleteBtn);
    
    for (let i = 0; i < deleteBtn.length; i++) {
      const del = deleteBtn[i];
      del.addEventListener('click', () =>{
        item.splice(i, 1);
        localStorage.setItem("item", JSON.stringify(item));
        location.reload();
      })
  }}
  
  deleteItem();


// function getSavedCartOrCreateNewOne() {
//     const alreadyExistingCart = localStorage.getItem('item');

//     if (alreadyExistingCart) {
//         return new Cart(item.items);
//     }
//     return new Cart();
// }

// function saveCartInLocalStorage(cart) {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     console.log(`Saved cart => `, cart);
// }

