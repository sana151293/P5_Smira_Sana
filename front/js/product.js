const productId = getProductIdFromUrl();

fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    displayProductInformationInHtml(product);
    addProductInCartEvent(product)
  }).catch(() => {
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

function saveProductInLocalStorage(product) {
  let products = JSON.parse(localStorage.getItem("products"));

  if (products === null) {
    products = [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    const foundOptionProduct = products.find(element => element.id == product.id && element.couleur == product.couleur);

    if (foundOptionProduct == undefined) {
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));

    } else {
      foundOptionProduct.quantite += product.quantite;
      localStorage.setItem("products", JSON.stringify(products));
    }
  }
}

const addProductInCartEvent = (product) => {
  let button = document.getElementById("add-to-cart")

  button.addEventListener("click", () => {
    const colorsValue = document.querySelector("#colors").value
    const quantityValue = Number(document.querySelector("#quantity").value)

    let productOptions = {
      id: `${product._id}`,
      nom: `${product.name}`,
      couleur: colorsValue,
      quantite: quantityValue,
      prix: Number(product.price),
      image: `${product.imageUrl}`,
      alt: `${product.altTxt}`
    }
    saveProductInLocalStorage(productOptions);
  })
}



