
const submitButton = document.querySelector("#submitButton")
//console.log(submitButton)

const correo_electronico = document.querySelector("#e_mail")
//console.log(e_mail)

const nombre_tarjeta = document.querySelector("#nombre_tarjeta")
//console.log(nombre_tarjeta)

const numero_tarjeta = document.querySelector("#numero_tarjeta")
//console.log(numero_tarjeta)

const fecha_caducidad = document.querySelector("#fecha_caducidad")
//console.log(fecha_caducidad)

const cvv = document.querySelector("#cvv")

//Función 1) para validar el email
const validarEmail =(email)=> { //funcion 1)para validar el email,
    return String(email)
    .toLowerCase()
    .match( //lo que introduzco coincide con esa expresion regular lo que yo quiero que valide, Esto coincide con un correo o no? si, lo deja pasar.
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//Función 2) para validar nombre_tarjeta (nombre de persona)
const validarNombrePersona =(nombre)=> { //funcion 2)para validar nombre_tarjeta (nombre de persona),
    return nombre.length > 5;
}

// Función 3) para validar número de la tarjeta
const validarNumeroTarjeta =(numero)=> { 
    return numero.length === 16; //espacios y depende de la tarjeta DUDA
}

// Función 4) para validar fecha de caducidad
const validarFechaCaducidad =(fecha)=> { 
 return fecha.length === 2023;  // por año?
}

//Función 5) para validar cvv
const validarCvv =(cvv)=> { 
    return cvv.length >=3; 
}

document.addEventListener("keyup", (e)=>{ //escucha el click en todo el docum

if (validarEmail(correo_electronico.value) && validarNombrePersona(nombre_tarjeta.value)) && (validarNumeroTarjeta(numero_tarjeta.value)) && validarFechaCaducidad(fecha_caducidad.value) && (validarCvv(cvv.value)) {
    submitButton.disabled = false;
} else {
    submitButton.disabled = true;
}
})

document.addEventListener("submit", (e)=>{
    e.preventDefault()
    if ( validarEmail(correo_electronico.value)){
        console.log("correcto");
    }

    //console.log(correo_electronico.value)
    //console.log(nombre_tarjeta.value)
    //console.log(numero_tarjeta.value)
    //console.log(fecha_caducidad.value)
    //console.log(cvv.value)
})




