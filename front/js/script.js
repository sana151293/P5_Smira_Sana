
//let altTxt = ( "Photo d'un canapé bleu, deux places");
//let colors = ( 'Blue','White' ,'Black'); 
//let description = ("Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
//let  imageUrl= "http://localhost:3000/images/kanap01.jpeg";
//let name =  "Kanap Sinopé";
//let  price = 1849;
//let _id = "107fb5b75607497b96722bda5b504926";


//fetch ('http://localhost:3000/api/products')
//.then(res => res.json())
 //.then(data => {
  //        {console.log(data)};

//for (let products of data  ){ 
 //const afficheData = document.querySelector("#items"); 
//affichageData.innerHTML = (data);
  
fetch('http://localhost:3000/api/products')
.then(res => res.json())
.then(data => {
     {console.log(data)};
 (function(data){
      data.map(function(products, index) {
       document
          .querySelector(".items")
          .insertAdjacentHTML("beforebegin","<div class='"+products._id+"'>"
          +"<p>Image :<img src='"+products.imageUrl+"' alt='image_produit' /></p>"
          +"<h3>Name :"+produit.name+"</h3>"
          +"<p>Price :"+produit.price+"</p>"
          +"</div>")}
  )});
  });
  



//const GET = {
   // method: 'POST',
  //  headers: {
  //  'Content-Type': 'application/json',
   // },
   // body: JSON.stringify(update),
  //  };
//fetch('http://localhost:3000/api/products',GET)
//.then(data => {
    //  if (!data.ok) {
      //  throw Error(data.status);
      // }
      // return data.json();
      //}).then(update => {
      //console.log(update);
     // }).catch(e => {
     // console.log(e);
    //  });
     
//fetch("http://localhost:3000/api/products")
//.then(response => response.json())
//.then(response => alert(JSON.stringify(response)))
//.catch(error => alert("Erreur : " + error))
//.then(function(res) {
//  if (res.ok) {
 //  return res.json();
// }
// })
//.then(function(value) {
//console.log(value);
  //})
 // .catch(function(err) {
    // Une erreur est survenue
 // });

  
 // var element = document.getElementById(107fb5b75607497b96722bda5b504926)
//dataAPI
    //.then(async (responseData) => {
        //const articles = await responseData.json();
        //console.log(articles);

        // insertion élément des produits  
        // try {
        // var altTxt = articles[0].altTxt;
        // var colors = articles[0].colors;
        // var description = articles[0].description;
        //var imageUrl = articles[0].imageUrl;
        //var name = articles[0].name;
        //var price = articles[0].price;
        //  var _id = articles[0]._id;

        //console.log(altTxt);
        //  console.log(colors);
        //  console.log(description);
        // console.log(imageUrl);
        // console.log(name);
        // console.log(price);
        //  console.log(_id);

        //test fonctionne à moitié 
        //const affichage_altTxt = document.querySelector("#items");
        //affichage_altTxt.innerHTML = altTxt;
        //const affichage_colors = document.querySelector("#items");
        //affichage_colors.innerHTML = colors;
        //const affichage_description = document.querySelector("#items");
        //affichage_description.innerHTML = description;
        //const affichage_name = document.querySelector("#items");
        //affichage_name.innerHTML = name;
        //const affichage_price = document.querySelector("#items");
        //affichage_price.innerHTML = price;
        //const affichage_image = document.querySelector("#items")

       // var items = [

         //   [{
               // _id: '107fb5b75607497b96722bda5b504926',
               // altTxt: 'Photo d/un canapé bleu, deux places',
               // colors: ['Blue', 'White', 'Yellow'],
                //description: 'Mon article 1',
               // imageUrl: 'https://www.milome.fr/9140-thickbox_default/canape-loft-3-places.jpg',
                //name: 'Kanap Sinopé',
                //price: 1849,
            //}],
       // ];


        //for (let propriete in items) {
           // document.getElementById('items').innerHTML += items[propriete] + '<br>';
      //  };