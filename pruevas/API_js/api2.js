
const API_URL = `https://jsonplaceholder.typicode.com`;
const respuesta = document.querySelector('#respuesta');

// Antes se hacia de esta manera.
    // Actualizar una parte concreta de la página.
const xhr = new XMLHttpRequest();


function onRequestHandler() {
    if( this.readyState === 4 && this.status === 200 ) {
        /*  0 = INSET, no se ha llamado al metodo open.
            1 = OPENED, se ha llamado al metodo open.
            2 = HEADERS_RECEIVED, se está llamando al metodo send()
            3 = LOADING, está cargando, es decir, está recibiendo la respuesta.
            4 = DONE,  se ha completado la operación.
        */
        const data = JSON.parse(this.response);
        console.table(data); // 🟢
        
        const dataBuscada = data.map( 
            user => `<li>${user.name} | 📩 ${user.email}</li>`
        ).slice(0,4); // slice() Filtro la cantidad que quiero.

        respuesta.innerHTML = `<ul class="ul">${dataBuscada}</ul>`;

    }
}

/* Ejecutamas la function
    Inicia en el estado cero porque no hemos llamado al metodo open.
*/
xhr.addEventListener('load', onRequestHandler);

/* Llamamos al metodo open.
    Recive dos parametros:
    'GET', para que nos devuelva datos del servidor.
    'URL', la url de la api.
 */ 
xhr.open('GET', `${API_URL}/users`);
xhr.send();
















