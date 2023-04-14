const container_cards = document.querySelector('#container_cards');
const ver_producto = document.querySelector('#ver_producto');
const ul = document.createElement('ul');


const API = `https://fakestoreapi.com/products`;

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
                    <img src="${image}" class="card-img-top" alt="${description}">
                </div>

                <div class="card-body">
                    <h1 class="card-title h6">${title}</h1>
                    <p class="card-subtitle mb-2 text-muted">${category}</p>
                    <small class="text-muted">
                        <p class="card-text mb-3">${description.slice(0,150)}.</p>
                    </small>
                    <span class="card-text rounded-pill text-light py-1 px-4 bg-success">${price}.</span>
                </div>

                <div class="card-footer justify-content-center gap-1 d-flex">
                    <small class="text-muted">
                        <button type="text" onclick=ver_producto(${id}) value="${id}" class="btn btn-secondary">Ver Producto</button>
                        <button class="btn btn-primary">Enviar al carrito</button>
                    </small>
                </div>
            </div>
        </div>
        `
    });

    function ver_producto(id) {
        console.log(id);
    }

})
.catch( err  => console.error(err))
