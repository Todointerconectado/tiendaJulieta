const API_URL = `https://jsonplaceholder.typicode.com`;
const respuesta = document.querySelector('#respuesta');
const ul = document.createElement('ul');


    fetch(`${API_URL}/users`)
    .then( (response) => response.json())
    .then((json) => {
        json.slice(0,3).forEach( user => {
            let li = document.createElement('li');
            li.append( document.createTextNode(`${user.name} | 📩 ${user.email}`) );
            ul.append(li);
        });

        respuesta.append(ul);
    });

