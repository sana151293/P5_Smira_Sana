// Requête HTTP de type GET vers l'api

fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then((product) => {
    // Boucle For Of qui répête les informations et les affichent sur la page avec innerHTML
    for (data of product) {
      document.getElementById("items").innerHTML +=
        `<a href="./product.html?id=${data._id}">
  <article>
   <img
         src="${data.imageUrl}"
         alt="${data.altTxt}"/>
     <h3 class="productName"> ${data.name}</h3>
     <p class="productDescription"> ${data.description}</p>
 </article>
</a>`;
    }
  })
  // Message d'erreur si la requête n'a pas de réponse
  .catch((err) => {
    alert(error);
  });

  