//Pintar dinámicamente la información del producto clickeado en la página shop.


const productoParaElCarrito={
    idProducto: 1,
    color: "color seleccionado",
    cantidad: 2
}



///click sobre el btn agregar al carrito
//1. Capturar el btn
//2. Agregar el escuchador de envento click
//3. En el callback del AddEvent, capturar la info del carrito del storage.
const arrayCart = JSON.parse(localStorage.getItem("cart")) || [];
productoParaElCarrito.id = arrayCart.length + 1;
arrayCart.push(productoParaElCarrito);
localStorage.setItem("cart", JSON.stringify(arrayCart));
