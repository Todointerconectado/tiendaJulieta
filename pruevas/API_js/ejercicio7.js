const btn_dolar = document.querySelector('#dolar');
const btn_uf = document.querySelector('#uf');
const result = document.querySelector('#result');

function obtenerDatos(valor) {
    const urlAPI= `https://mindicador.cl/api/${valor}`;

    // Antes se hacia de esta manera.
        // Actualizar una parte concreta de la página.
    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlAPI, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            result.innerHTML = ''; // reset del contenido anterior.

            const datosBuscados = datos.serie.map( item => 
                `<li> ${item.fecha.slice(0,10)} | ${item.valor} </li>`
            ).slice(0,3);

            result.innerHTML = `<ul>${datosBuscados}</ul>`;
        }
    }
}

btn_dolar.addEventListener('click', () => { obtenerDatos('dolar') });
btn_uf.addEventListener ('click', () => { obtenerDatos('uf') });