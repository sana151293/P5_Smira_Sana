// récupère l'id
const str = window.location.href;
const url = new URL(str);
const id = url.searchParams.get("id");

let productData = [];
fetch(`http://localhost:3000/api/products/${id}`) // 5s
  .then((response) => response.json())
  .then((product) => {
    productData = product;
    console.log(productData)
    displayProductInformation();
  })


const displayProductInformation = () => {

  const pageTitleDiv = document.querySelector("head > title");
  const imgDiv = document.querySelector(".item__img");
  const titleDiv = document.querySelector("#title");
  const priceDiv = document.querySelector("#price");
  const descriptionDiv = document.querySelector("#description");
  const colorsDiv = document.getElementById('colors');

  // Intégration dans la page HTML
  pageTitleDiv.innerHTML = productData.name;
  imgDiv.innerHTML += `<img src="${productData.imageUrl}" alt="${productData.altTxt}">`;
  titleDiv.innerHTML += productData.name;
  priceDiv.innerHTML += productData.price;
  descriptionDiv.innerHTML += productData.description;

  for (let i = 0; i < productData.colors.length; i++) {
    colorsOption = document.createElement('option');
    colorsOption.text = productData.colors[i];
    colorsDiv.add(colorsOption);

  }

  addBasket()
};
function saveInLocalStorage(product) {
  let productInLocalStorage = JSON.parse(localStorage.getItem("item"));
  if (productInLocalStorage === null) {
      productInLocalStorage= [];
      productInLocalStorage.push(product);
      localStorage.setItem("item", JSON.stringify(productInLocalStorage));
  } else {
      const foundOptionProduct = productInLocalStorage.find(element => element.id == product.id && element.couleur == product.couleur);
      
      if (foundOptionProduct == undefined) {
          productInLocalStorage.push(product);
          localStorage.setItem("item", JSON.stringify(productInLocalStorage));

      } else {
          foundOptionProduct.quantite += product.quantite;
          localStorage.setItem("item", JSON.stringify(productInLocalStorage));
      }
  }   
}

const addBasket = () => {
  let button = document.getElementById("addToCart")
  console.log(button)
  button.addEventListener("click", () => {

    const colorsValue = document.querySelector("#colors").value
    const quantityValue = parseInt(document.querySelector("#quantity").value)

  let productOptions = {
    id: `${productData._id}`,
    nom: `${productData.name}`,
    couleur: colorsValue ,
    quantite: quantityValue ,
    prix: `${productData.price}`,
    image: `${productData.imageUrl}`,
    alt: `${productData.altTxt}`
}
saveInLocalStorage(productOptions);
  })}



