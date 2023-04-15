const container_cards = document.querySelector('#container_cards');
const verProducto = document.querySelectorAll('.verProducto');
const ul = document.createElement('ul');


const API = `https://fakestoreapi.com/products`;


console.log(verProducto);


fetch(API)
.then(  res  => res.json())
.then(  json => {
    // Con ".slice(-6,20)" Traemos los ultimos 6 productos del api
    json.reverse().slice(0,20).forEach( producto => {
        // Desestructuración 
        const {id, title, price, description, category, image} = producto;

        container_cards.innerHTML += `
        <div  class="col-12 col-md-6 col-lg-3">
            <div class="card">
                <div class="card-header">
                    <div class="img-hover-zoom">
                        <img src="${image}" class="card-img-top img-style" alt="${description.slice(0,150)}">
                    </div>
                </div>

                <div class="card-body">
                    <h1 class="card-title h6 title-h">${title}</h1>
                    <span class="card-subtitle bg-secondary text-light px-3 py-1 fw-2 rounded-pill">${category}</span>
                    <small class="text-muted">
                        <p class="card-text mt-3 mb-3">${description.slice(0,150)}.</p>
                    </small>
                    <span class="card-text rounded-pill text-light py-1 px-4 bg-success">$ ${price} USD</span>
                </div>

                <div class="card-footer justify-content-center gap-1 d-flex">
                    <small class="text-muted">
                        <button class="btn-azul">Más información</button>
                    </small>
                </div>
            </div>
            
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }).addEventListener('click', console.log(verProducto));


})
.catch( err  => console.error(err))
