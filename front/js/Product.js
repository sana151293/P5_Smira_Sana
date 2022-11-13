const productId = getProductIdFromUrl();

const item = JSON.parse(localStorage.getItem("item")) || [];
fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    displayProductInformationInHtml(product);
    addCart(product);
   
  }).catch((err) => {
    alert(err)
  });


function getProductIdFromUrl() {
  const str = window.location.href;
  const url = new URL(str);
  return url.searchParams.get("id");
}

const displayProductInformationInHtml = (product) => {

  const pageTitleDiv = document.querySelector("head > title");
  const imgDiv = document.querySelector(".item__img");
  const titleDiv = document.querySelector("#title");
  const priceDiv = document.querySelector("#price");
  const descriptionDiv = document.querySelector("#description");
  const colorsDiv = document.getElementById('colors');

  // Intégration dans la page HTML
  pageTitleDiv.innerHTML = product.name;
  imgDiv.innerHTML += `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
  titleDiv.innerHTML += product.name;
  priceDiv.innerHTML += product.price;
  descriptionDiv.innerHTML += product.description;

  for (let i = 0; i < product.colors.length; i++) {
    colorsOption = document.createElement('option');
    colorsOption.text = product.colors[i];
    colorsDiv.add(colorsOption);
  }
  
};
// function saveInLocalStorage(product) {
//   let productInLocalStorage = JSON.parse(localStorage.getItem("item"));
//   if (productInLocalStorage === null) {
//       productInLocalStorage= [];
//       productInLocalStorage.push(product);
//       localStorage.setItem("item", JSON.stringify(productInLocalStorage));
//   } else {
//       const foundOptionProduct = productInLocalStorage.find(element => element.id == product.id && element.couleur == product.couleur);
      
//       if (foundOptionProduct == undefined) {
//           productInLocalStorage.push(product);
//           localStorage.setItem("item", JSON.stringify(productInLocalStorage));

//       } else {
//           foundOptionProduct.quantite += product.quantite;
//           localStorage.setItem("item", JSON.stringify(productInLocalStorage));
//       }
//   }   
// }

const addCart = (product) => {

  let button = document.getElementById("addToCart")
  console.log(button)
  button.addEventListener("click", () => {

    const colorsValue = document.querySelector("#colors").value
    const quantityValue = parseInt(document.querySelector("#quantity").value)

    let newItem = {
      _id: productId,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      selectColors: colorsValue,
      quantity: quantityValue,
  }

  let itemOptions = {
    id: `${product._id}`,
    name: `${product.name}`,
    colors: colorsValue ,
    quantity: quantityValue ,
    price: `${product.price}`,
    image: `${product.imageUrl}`,
    altTxt: `${product.altTxt}`
}

let index = item.findIndex(itemOptions => itemOptions['_id'] == productId);
let indexOption= item.findIndex(newItem => newItem['selectColors'] == colorsValue);

if(index === -1){
    item.push(itemOptions);
        }else if(indexOption === -1){
            item.push(newItem);
    }else {
            item[index].quantity = item[index].quantity + Number(itemQuantity.value);
        }
        localStorage.setItem("item", JSON.stringify(item));

});
}


