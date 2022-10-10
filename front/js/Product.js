// récupère l'id
const str = window.location.href;
const url = new URL(str);
const id = url.searchParams.get("id");


fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    displayProductInformation(product);
    console.log(product.colors)
  })
  .catch((error) => {
    alert(error);
  });

const displayProductInformation = (product) => {

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


  localStorage.setItem("key", JSON.stringify(product));
  let obj = JSON.parse(localStorage.getItem("key"));
};


