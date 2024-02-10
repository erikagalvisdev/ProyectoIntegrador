const shoppingcar = document.getElementById("shoppingcar");
console.log(shoppingcar);
const modal = document.querySelector(".modalCart");
console.log(modal);
const closeButton = document.getElementById("closeModal");
console.log(closeButton);

const showCart = (button)=> {
    button.addEventListener("click", () => {
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");
        console.log("click");
    });
};

showCart(shoppingcar);
showCart(closeButton);

    
   
  