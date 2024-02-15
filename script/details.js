
const idCard = JSON.parse(localStorage.getItem("idCar"));
const URL_BASE = "https://minibackend-dev-fgzg.2.us-1.fl0.io/";

const getProduct = async (url, id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const printDetailsProduct = (product) => {
  const imageOrange = document.querySelector(".Gra__orange");
  const subtittle = document.querySelector(".tittle_charns");
  const precioUni = document.querySelector(".precio");

  imageOrange.src = product.imagen;
  subtittle.innerText = product.nombre;
  precioUni.innerText = product.precioUnitario;
};



document.addEventListener("DOMContentLoaded", async () => {
  const url = `${URL_BASE}productos`;
  const selectedProduct = await getProduct(url, idCard);
  printDetailsProduct(selectedProduct);
});


