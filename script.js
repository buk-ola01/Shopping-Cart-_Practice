let shop = document.getElementById("shop");
console.log(shop);

let shopItemsData = [{
  id: "key_1",
  name: "Casual Shirt",
  price: 45,
  desc: "Lorem ipsum dolor, Casual Shirt All sizes",
  img: "images/img-1.jpg",
}, 
{
  id: "key_2",
  name: "Office Shirt",
  price: 100,
  desc: "Lorem ipsum dolor, Office shire small size",
  img: "images/img-2.jpg",
},
{
  id: "key_3",
  name: "T-Shirt",
  price: 25,
  desc: "Lorem ipsum dolor, Mens T- shirt Large size",
  img: "images/img-3.jpg",
},
{
  id: "key_4",
  name: "Mens Suit",
  price: 35,
  desc: "Lorem ipsum dolor, Mens Suit Large size Only",
  img: "images/img-4.jpg",
}]
  let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
      let {id, name, price, desc, img} = x;
      return `<div id=product-id-${id} class="item">
      <img src=${img} width="220" alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h3>$ ${price}</h3>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div> 
        </div>
      </div>
    </div>`
    }).join(""))
  };
let basket = [];
generateShop();

let increment = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search == undefined)
  {
     basket.push({
    id: selectedItem.id,
    item: 1,
  });
  }
  else {
    search.item += 1;
  }
  
 // console.log(basket);
  update(selectedItem.id);
 
};
let decrement = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item == 0) return;
  else {
    search.item -= 1;
  }
  
 //  console.log(basket);
  update(selectedItem.id);
};
let update = (id) => {
 // console.log(id);
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculateQuantity();
};

let calculateQuantity = () => {
  
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y);
  
};