const shoppingcar = document.getElementById("shoppingcar");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

const showCart = (button)=> {
    button.addEventListener("click", () => {
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");
        console.log("click");
    });
};

showCart(shoppingcar);
showCart(closeButton);

    
   
  