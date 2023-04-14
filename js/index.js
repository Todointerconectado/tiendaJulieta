const container = document.querySelector('#container');


const API = `https://fakestoreapi.com/products`;

fetch(API)
.then(  res  => res.json())
.then(  json => {
    json.forEach( images => {
        console.table(images.image)
    });
    console.table(json, 'category','image')
})
.catch( err  => console.error(err))




