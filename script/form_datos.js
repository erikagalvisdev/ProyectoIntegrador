const btn = document.querySelector(".btn");
const ocultar = document.querySelector("#error-message");
const nombre = document.querySelector("#full-name");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");

// Función 1) para validar el nombre
const validarNombre = (nombre) => {
    console.log("nombre", nombre);
    return nombre.length > 5;
};

// Función 2) para validar el teléfono
const validarPhone = (phone) => {
    console.log("phone", phone);
    return !isNaN(phone) && phone.length === 10;
};

// Función 3) para validar la dirección
const validarAddress = (address) => {
    console.log("address", address);
    return address.length > 5;
};

document.addEventListener('keyup', ()=>{
    if (validarNombre(nombre.value) && validarPhone(phone.value) && validarAddress(address.value)){
        console.log("correcto")
        ocultar.classList.add("ocultar");
    }else {
        ocultar.classList.remove("ocultar");
        console.log("incorrect")
    }
})

document.addEventListener('submit', ()=>{
    e.preventDefault();
})

