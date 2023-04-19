const API = `https://fakestoreapi.com/products`;
const select = document.querySelector('#categoria');
const cotizacion_resultado = document.querySelector('#cotizacion_resultado');


select.addEventListener('change', () => {
    const categoria = select.value;
    console.log(categoria);

    fetch(API)
    .then(  res  => res.json())
    .then(  json => {
        json.reverse().slice(0,20).forEach( producto => {
            // Desestructuración 
            const {title, price, category} = producto;
            if(categoria === category) {
                cotizacion_resultado.innerHTML += `
                <table>
                    <thead>
                        <tr>
                            <th>${title.slice(0,15)} | ${categoria} | $${price}USD</th>
                        </tr>
                    </thead>
                </table>
                `
            }
        });
    }).catch( err  => console.error(err));
    cotizacion_resultado.innerHTML = '';
});



