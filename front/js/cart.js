


// // class avec les éléments des articles
class Item {
    constructor(color, id, name, prix, imageURL, description, altTxt) {
        this.color = color;
        this._id = id;
        this.title = name
        this.price = prix;
        this.imageURL = imageURL;
        this.description = description;
        this.altTxt = altTxt;

    }
}
// // class du panier avec les operation qui seront fait dedans
// class Cart {
//     items = [];
//     constructor(items) {
//         if (items) {
//             this.items = items;
//         }
//     }

//     updateQuantity(quantity) {
//         this.quantity += quantity
//     }

//     // ajoute l'article
//     addItem(item) {
//         //ajoute l'article
//         this.cartItems.push(item)
//     }
//     // supprime l'article du panier
//     removeItem(item) {

//         // permet d'obtenir l'index du tableau
//         let myIndex = this.cartItems.indexOf(item);
//         // vérifie si la valeur est présente , si présente index différent de -1
//         if (myIndex !== -1) {
//             // splice ajoute ou supprime un élément du tableau
//             // supprime l'élément présent à ce niveau de l'index
//             this.cartItems.splice(myIndex, 1);

//         }
//     }
//     getTotalPrice() {
//         let total = 0;
//         for (let i = 0; i < mycart.cartItems.length; i++) {
//             total += mycart.cartItems[i].price
//         }
//         return total;
//     }

// }


// // créer un nouvel article avec ses propriété

// // const _107fb5b75607497b96722bda5b504926 = new CartItem("[Blue,White,Black]", "107fb5b75607497b96722bda5b504926", "Kanap Sinopé", 1849, "http://localhost:3000/images/kanap01.jpeg", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Photo d'un canapé bleu, deux places")
// // const _415b7cacb65d43b2b5c1ff70f3393ad1 = new CartItem("[Black/Yellow,Black/Red]", "415b7cacb65d43b2b5c1ff70f3393ad1", "Kanap Cyllène", 4499, "http://localhost:3000/images/kanap02.jpeg", "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.", "Photo d'un canapé jaune et noir, quattre places")
// // const _055743915a544fde83cfdfc904935ee7 = new CartItem("[Green,Red,Orange]", "055743915a544fde83cfdfc904935ee7", "Kanap Calycé", 3199, "http://localhost:3000/images/kanap03.jpeg", "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.", "Photo d'un canapé d'angle, vert, trois places")
// // const _a557292fe5814ea2b15c6ef4bd73ed83 = new CartItem("[Pink,White]", "a557292fe5814ea2b15c6ef4bd73ed83", "Kanap Autonoé", 1499, "http://localhost:3000/images/kanap04.jpeg", "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.", "Photo d'un canapé rose, une à deux place")
// // const _8906dfda133f4c20a9d0e34f18adcf06 = new CartItem("[Grey,Purple,Blue]", "8906dfda133f4c20a9d0e34f18adcf06", "Kanap Eurydomé", 2249, "http://localhost:3000/images/kanap05.jpeg", "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.", "Photo d'un canapé gris, trois places")
// // const _77711f0e466b4ddf953f677d30b0efc9 = new CartItem("[Grey,Navy]", "77711f0e466b4ddf953f677d30b0efc9", "Kanap Hélicé", 999, "http://localhost:3000/images/kanap06.jpeg", "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.", "Photo d'un canapé gris, deux places")
// // const _034707184e8e4eefb46400b5a3774b5f = new CartItem("[Red,Silver]", "034707184e8e4eefb46400b5a3774b5f", "Kanap Thyoné", 1999, "http://localhost:3000/images/kanap07.jpeg", "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.", "Photo d'un canapé rouge, deux places")
// // const _a6ec5b49bd164d7fbe10f37b6363f9fb = new CartItem("[Pink,Brown,Yellow,White]", "a6ec5b49bd164d7fbe10f37b6363f9fb", "Kanap orthosie", 3999, "http://localhost:3000/images/kanap08.jpeg", "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.", "Photo d'un canapé rose, trois places")
// // const mycart = new Cart()

// // article ajouté au panier et supprimé exemple

// // mycart.addItem(_107fb5b75607497b96722bda5b504926)
// // mycart.addItem(_415b7cacb65d43b2b5c1ff70f3393ad1)
// // mycart.addItem(_055743915a544fde83cfdfc904935ee7)
// // mycart.addItem(_a557292fe5814ea2b15c6ef4bd73ed83)
// // mycart.addItem(_8906dfda133f4c20a9d0e34f18adcf06)
// // mycart.addItem(_77711f0e466b4ddf953f677d30b0efc9)
// // mycart.addItem(_034707184e8e4eefb46400b5a3774b5f)
// // mycart.addItem(_a6ec5b49bd164d7fbe10f37b6363f9fb)



// // // article 3 supprimé :
// // mycart.removeItem()

// // console.log(mycart.cartItems.length)

// // // total du panier
// // console.log(mycart.getTotalPrice())

// // Boucle For Of qui répête les informations et les affichent sur la page avec innerHTML



// //  const button = document.getElementById('addToCart')
// //  button.addEventListener("click", myFunction);
// // // button.addEventListener('click', 
// // // const newLiDiv = document.createElement('li');
// // // newLiDiv.innerText = "abracadabra";
// // // })



// // function myFunction() {

// //   document.getElementById("addToCart").innerHTML = 'tata';

// // }
// function getSavedCartOrCreateNewOne() {
//     const alreadyExistingCart = localStorage.getItem(product);

//     if (alreadyExistingCart) {
//         const objwithItems = JSON.parse(alreadyExistingCart);
//         return new Cart(objwithItems.items);

//     }

//     return new Cart();
// }

// function saveCartInLocalStorage(cart) {
//     localStorage.setItem("cart", JSON.stringify(product));
//     console.log(`Saved cart => `, product)
// }

class Cart {
    constructor() {
        let cart = localStorage.getItem("basket");
        if (cart == null) {
            this.cart = [];
        } else {
            this.cart = JSON.parse(cart);
        }
    }
    save() {
        localStorage.setItem("item", JSON.stringify(this.cart));
    }
    add(product) {

        let foundProduct = this.cart.find(p => p.id == product.id)
        if (foundProduct != undefined) {
            foundProduct.quantity++;
        } else {
            product.quantity = 1;
            this.cart.push(product);
        }
        this.save();
    }
    remove(product) {

        this.cart = this.cart.filter(p => p.id != product.id);
        this.save();
    }
    changeQuantity(product, quantity) {

        let foundProduct = this.cart.find(p => p.id == product.id);
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity;
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);
            
        } else {
            this.save()
        }
        }
    }
    getNumberProduct() {

        let number = 0;
        for (let product of this.cart) {
            number += product.quantity;
        }
        return number;
    }

    getTotalPrice() {

        let total = 0;
        for (let product of this.cart) {
            total += product.quantity * product.price;
        }
        return total;
    }
}


function getSavedCartOrCreateNewOne() {
        const alreadyExistingCart = localStorage.getItem('item');
      
        if (alreadyExistingCart) {
          const objWithItems = JSON.parse(alreadyExistingCart);
          return new Cart(objWithItems.items);
        }
        return new Cart();
    }
      
      function saveCartInLocalStorage(cart) {
        localStorage.setItem('item', JSON.stringify(cart));
        console.log(`Saved cart => `, cart);
      }


// const cartListDiv = document.querySelector('cart-list')
// const button = document.querySelector('add-product-btn');
// function click(button) {
//     document.getElementById("add-product-btn").addEventListener("click", function(){
//      add(product);
 
        
//     });
// }

