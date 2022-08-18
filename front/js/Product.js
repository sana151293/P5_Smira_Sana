//  récupére l'identifiant du produit à partir de l'url

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

// récupère les data de l'api
 
async function retrieveProductData() {
  return (await fetch(`http://localhost:3000/api/products/${id}`)).json();
}
