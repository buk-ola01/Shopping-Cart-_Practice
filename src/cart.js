let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculateQuantity = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y);
  
};

calculateQuantity();