const from   = document.querySelector('#from_contacto');
const inputs = document.querySelectorAll('#from_contacto input');
const expresiones_regulares = {
    name:     /^[a-zA-ZÀ-ÿ\s]{3,30}$/ , // Letras, espacios, pueden llevar acentos.
    email:    /^[\w\-\.]+@[\w\-]+\.com$/, // exige @ y finalizar con el .com
    telefono: /^\d{10,14}$/            , // 7 a 14 números.
}
const campos = {
    name:      false,
    email:     false,
    telefono:  false
}

const validar_campo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.querySelector(`#grupo__${campo}`).classList.remove('from__grupo-incorrecto');
        document.querySelector(`#grupo__${campo}`).classList.add('from__grupo-correcto');
        document.querySelector(`#grupo__${campo} .from__input-error`).classList.remove('from__input-error-activo');
        document.querySelector(`#grupo__${campo} .from__label`).classList.remove('from__label-error');

        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
        campos[campo] = true;
    }
    else {
        document.querySelector(`#grupo__${campo}`).classList.add('from__grupo-incorrecto');
        document.querySelector(`#grupo__${campo}`).classList.remove('from__grupo-correcto');
        
        document.querySelector(`#grupo__${campo} .from__input-error`).classList.add('from__input-error-activo');
        document.querySelector(`#grupo__${campo} .from__label`).classList.add('from__label-error');

        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        campos[campo] = false;
    }
}

const validar_password2 = () => {
    const input_password1 = document.querySelector('#password');
    const input_password2 = document.querySelector('#password2');

    // if(input_password1.value === input_password2.value) {
    //     document.querySelector(`#grupo__password2`).classList.remove('from__grupo-incorrecto');
    //     document.querySelector(`#grupo__password2`).classList.add('from__grupo-correcto');
        
    //     document.querySelector(`#grupo__password2 .from__input-error`).classList.remove('from__input-error-activo');
    //     document.querySelector(`#grupo__password2 .from__label`).classList.remove('from__label-error');

    //     document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-check');
    //     document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
    //     campos['password'] = true;
    // }
    // else {
    //     document.querySelector(`#grupo__password2`).classList.add('from__grupo-incorrecto');
    //     document.querySelector(`#grupo__password2`).classList.remove('from__grupo-correcto');
        
    //     document.querySelector(`#grupo__password2 .from__input-error`).classList.add('from__input-error-activo');
    //     document.querySelector(`#grupo__password2 .from__label`).classList.add('from__label-error');

    //     document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-check');
    //     document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
    //     campos['password'] = false;
    // }
}

let validar_from = (event) => {
    switch (event.target.name) {
        case "name":
            validar_campo(expresiones_regulares.name, event.target,'name');
            break;
        case "email":
            validar_campo(expresiones_regulares.email, event.target,'email');
            break;
        case "telefono":
            validar_campo(expresiones_regulares.telefono, event.target,'telefono');
            break;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validar_from);
    input.addEventListener('blur' , validar_from);
});

from.addEventListener('submit', event => {
    event.preventDefault();

    if(campos.name && campos.email && campos.telefono ) {
        from.reset();

        document.querySelector('#from_mensaje-exito').classList.add('from_mensaje-exito-activo');
        setTimeout( () => {
            document.querySelector('#from_mensaje-exito').classList.remove('from_mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.from__grupo-correcto').forEach( (icon) => {
            icon.classList.remove('from__grupo-correcto');
        });
    }
    else {
        document.querySelector('#from__mensaje').classList.add('from__mensaje-correcto');
        setTimeout( () => {
            document.querySelector('#from__mensaje').classList.remove('from__mensaje-correcto');
        }, 3000);
    }
});