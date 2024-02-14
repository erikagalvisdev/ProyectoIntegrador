const submitButton = document.querySelector("#submitButton");
const ocultar = document.querySelector("#error-message");
const correo_electronico = document.querySelector("#e_mail");
const nombre_tarjeta = document.querySelector("#nombre_tarjeta");
const numero_tarjeta = document.querySelector("#numero_tarjeta");
const fecha_caducidad = document.querySelector("#fecha_caducidad");
const cvv = document.querySelector("#cvv");

// Función 1) para validar el email
const validarEmail = (email) => {
  /*console.log("email", email);*/
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Función 2) para validar nombre_tarjeta (nombre de persona)
const validarNombrePersona = (nombre) => {
  console.log("nombre", nombre);
  return nombre.length > 5;
};

// Función 3) para validar número de la tarjeta
const validarNumeroTarjeta = (numero) => {
  console.log("numero", numero);
  return !isNaN(numero) && numero.length === 16;
};

// Función 4) para validar fecha de caducidad
const validarFechaCaducidad = (fecha) => {
  const currentDate = new Date();
  const inputDate = new Date(fecha);
  return inputDate > currentDate;
};

// Función 5) para validar cvv
const validarCvv = (cvv) => {
  return cvv.length === 3;
};

document.addEventListener("keyup", (e) => {
  if (
    validarEmail(correo_electronico.value) &&
    validarNombrePersona(nombre_tarjeta.value) &&
    validarNumeroTarjeta(numero_tarjeta.value) &&
    validarFechaCaducidad(fecha_caducidad.value) &&
    validarCvv(cvv.value)
  ) {
    submitButton.disabled = false;
    ocultar.classList.add("ocultar");
    console.log("verdadero");
  } else {
    submitButton.disabled = true;
    ocultar.classList.remove("ocultar");
    console.log("hay error");
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("correcto");
});
