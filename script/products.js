//1) Lista de productos ---//
const productos = [
  {
    id: 1,
    nombre: "Luxury Gems Necklace",
    codigo: "22331",
    precioUnitario: 168.76,
    tipoAccesorio: "bracelets",
    imagen: ["../assets/img-vista-1products.png"],
    descripcion: "collar plata perlado",
    stockColor: {
      plata: 1,
    },
  },
  {
    id: 2,
    nombre: "Aurora Ring",
    codigo: "22351",
    precioUnitario: 125.28,
    tipoAccesorio: "necklaces",
    imagen: ["../assets/img-vista-2products.png"],
    descripcion: "anillo curvo dorado",
    stockColor: {
      dorado: 1,
    },
  },
  {
    id: 3,
    nombre: "Reflections Necklace",
    codigo: "22123",
    precioUnitario: 620.73,
    tipoAccesorio: "earrings",
    imagen: ["../assets/img-vista-3products.png"],
    descripcion: "collar ancho dorado y plata",
    stockColor: {
      dorado: 1,
    },
  },
  {
    id: 4,
    nombre: "Dreamy Infinity Ring",
    codigo: "22543",
    precioUnitario: 327.71,
    tipoAccesorio: "rings",
    imagen: ["../assets/img-vista-4products.png"],
    descripcion: "anillo piedra rosa champan",
    stockColor: {
      dorado: 1.1,
    },
  },
  {
    id: 5,
    nombre: "Opulent Jewels Ring",
    codigo: "22923",
    precioUnitario: 168.76,
    tipoAccesorio: "rings",
    imagen: ["../assets/img-vista-5products.png"],
    descripcion: "anillo plata doble",
    stockColor: {
      plata: 1,
    },
  },
  {
    id: 6,
    nombre: "Serene Solitaire Earrings",
    codigo: "22987",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagen: ["../assets/img-vista-6products.png"],
    descripcion: "aretes corazol azul",
    stockColor: {
      dorado: 1,
    },
  },
  {
    id: 7,
    nombre: "Timeless Halo Earrings",
    codigo: "22325",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagen: ["../assets/img-vista-7products.png"],
    descripcion: "aretes diamante color plateado",
    stockColor: {
      plata: 1,
    },
  },
  {
    id: 8,
    nombre: "Exquisite Earrings",
    codigo: "22555",
    precioUnitario: 327.71,
    tipoAccesorio: "aretes",
    imagen: ["../assets/img-vista-8products.png"],
    descripcion: "aretes blancos,linea verde en forma de gota",
    stockColor: {
      dorado: 1.1,
    },
  },
  {
    id: 9,
    nombre: "Timeless Elegance Ring",
    codigo: "22555",
    precioUnitario: 168.76,
    tipoAccesorio: "rings",
    imagen: ["../assets/img-vista-9products.png"],
    descripcion: "anillo 3 formas color Dorado-azul oscuro",
    stockColor: {
      dorado: 1.2,
    },
  },
  {
    id: 10,
    nombre: "Luxury Charms Ring",
    codigo: "78205",
    precioUnitario: 620.73,
    tipoAccesorio: "rings",
    imagen: ["../assets/img-vista-10products.png"],
    descripcion: "anillo dorado piedra naranja",
    stockColor: {
      dorado: 1.3,
    },
  },
  {
    id: 11,
    nombre: "Blissful Bloom Rings",
    codigo: "22111",
    precioUnitario: 620.73,
    tipoAccesorio: "rings",
    imagen: ["../assets/img-vista-11products.png"],
    descripcion: "anillo hojas doradas",
    stockColor: {
      dorado: 1.4,
    },
  },
  {
    id: 12,
    nombre: "Sparkling Ring",
    codigo: "22246",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagen: ["../assets/img-vista-12products.png"],
    descripcion: "anillo murano plateado",
    stockColor: {
      plata: 1.1,
    },
  },
  {
    id: 13,
    nombre: "Glimmering Ring",
    codigo: "22777",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagen: ["../assets/img-vista-13products.png"],
    descripcion: "anillo liana-incrustaciones oro rosa",
    stockColor: {
      paloRosa: 1,
    },
  },

  {
    id: 14,
    nombre: "Serene Estefa",
    codigo: "22987",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagen: ["../assets/img-vista-6products.png"],
    descripcion: "aretes corazol azul",
    stockColor: {
      dorado: 1,
    },
  },
  {
    id: 14,
    nombre: "Serene erika",
    codigo: "22987",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagen: ["../assets/img-vista-6products.png"],
    descripcion: "aretes corazol azul",
    stockColor: {
      dorado: 1,
    },
  },
];

//---2) funcion  ---//
//function filtrarPorTipo(productos, tipo) {
//return productos.filter((producto) => producto.tipoAccesorio === tipo);
//}

// Llamamos función con la lista de productos y un tipo de accesorio existente//

//const tipoAccesorioExistente = "anillo";
//const productosFiltrados = filtrarPorTipo(productos, tipoAccesorioExistente);

//console.log(productosFiltrados);

// //---3) funcion  ---//

// function buscarPorNombre(listaProductos, nombre) {
//   const nombreMinus = nombre.toLowerCase();
//   const productosFiltrados = listaProductos.filter((elemento) =>
//     elemento.nombre.toLowerCase().includes(nombreMinus)
//   );

//   return productosFiltrados;
// }
// //console.log(buscarPorNombre( productos, "Serene"));

//---4) Función cuatro ---//
// const ordenar = productos.toSorted(
//   (precio1, precio2) => precio1.precioUnitario - precio2.precioUnitario
// );
// const ordenarA = productos.toSorted(
//   (precio1, precio2) => precio2.precioUnitario - precio1.precioUnitario
// );

// //console.log(ordenar);
// //console.log(ordenarA);

//---5) Función cinco---//

//reduce
const listaDeprueba = [
  {
    id: 13,
    nombre: "Glimmering Ring",
    codigo: "22777",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagen: ["../assets/img-vista-13products.png"],
    descripcion: "anillo liana-incrustaciones oro rosa",
    stockColor: {
      paloRosa: 1,
    },
    cantidad: 1,
  },

  {
    id: 14,
    nombre: "Serene Estefa",
    codigo: "22987",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagen: ["../assets/img-vista-6products.png"],
    descripcion: "aretes corazol azul",
    stockColor: {
      dorado: 1,
    },
    cantidad: 1,
  },
];

const calcularPrecioTotal = (productos) => {
  const total = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precioUnitario * producto.cantidad;
  }, 0);
  return total;
};

const precioTotal = calcularPrecioTotal(listaDeprueba);
//console.log(`El precio total de los productos es: ${precioTotal}`);

// Se agrega HTML dinamico

const insertarProductos = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach((producto) => {
    contenedor.innerHTML += `
    <div class="fila1" data-tipo="${producto.tipoAccesorio}">
      <div>
        <img src="${producto.imagen[0]}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>$${producto.precioUnitario}</p>
        <button class="boton" id=${producto.id}>Ver producto</button>
      </div>
    </div>`;
  });
};

insertarProductos(document.querySelector(".galeria1"), productos);

const botones = document.querySelectorAll(".boton")

botones.forEach((boton)=>{
    boton.addEventListener('click', (e)=>{
      console.log(e.target.id, "ID DEL BOTON")
    })
})

//Filtro por tipo de productos
let botonesFiltro = document.querySelectorAll(".boton-all");
botonesFiltro = [...botonesFiltro];
//console.log(botonesFiltro);

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tipoAccesorioExistente = boton.textContent.toLowerCase();
    const tarjetas = document.querySelectorAll(".fila1");

    tarjetas.forEach((tarjeta) => {
      if (tarjeta.dataset.tipo === tipoAccesorioExistente) {
        tarjeta.style.display = "block";
      } else {
        tarjeta.style.display = "none";
      }
    });
  });
});

// funcion buscardor

const buscador = document.getElementById("buscador");
const listaTar = document.querySelectorAll(".fila1");

buscador.addEventListener("input", (e) => {
  const textoBuscar = e.target.value.trim().toLowerCase();

  listaTar.forEach((tarjeta) => {
    const nombreProducto = tarjeta
      .querySelector("h2")
      .textContent.toLowerCase();

    if (nombreProducto.includes(textoBuscar)) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
});

const ordenarAscendente = (productos) =>
  productos.sort((a, b) => a.precioUnitario - b.precioUnitario);
const ordenarDescendente = (productos) =>
  productos.sort((a, b) => b.precioUnitario - a.precioUnitario);
document.getElementById("ordenarSelector").addEventListener("change", (e) => {
  console.log(e.target.value);

  let ordenamiento = [];
  switch (e.target.value) {
    case "1":
      ordenamiento = ordenarAscendente(productos.slice());
      break;

    case "2":
      ordenamiento = ordenarDescendente(productos.slice());
      break;

    default:
      ordenamiento=productos
      break;
  }
  console.log(ordenamiento); //llamar la funcion con la que pintamos los productos en la pagina y le pasamos el ordenamientro 

});
