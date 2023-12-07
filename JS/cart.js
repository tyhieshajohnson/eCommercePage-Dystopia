let item = JSON.parse(localStorage.getItem('item'));
// Add To Cart
let toCart = document.querySelector('#toCart'); //calling by id
let purchased = JSON.parse(localStorage.getItem('purchased')) || [];
let purchasedProduct = [];
let mainProduct = document.getElementById('mainProduct');
// function add(product,index) {
//     console.log('add');
//     // adds new element at the ned with a new length
//     purchased.push(product[index]);
//     // ccreating a new value
//     localStorage.setItem('purchased', JSON.stringify(purchased));
//     // add your function of the counter this function goes ontop of this one you making here
// }
// Add to cart
function addToCart() {
    // 
    let product = purchased.map(function(item, index){
          return `
    <div class="card" style="width: 18rem;">
    <image class="img-fluid" src='${item.url}'>
    <h5>${item.name}</h5>
    <p>${item.description}</p>
    <h4>${item.price}</h4>
    <a href="#" class="btn btn-primary"><button class="delete">Delete</button></a>
    <button class="btn btn-primary" data-add value="${index}">Add To Cart</button>
     
    </div>
    `
    }).join('')
    mainProduct.innerHTML = product
};
addToCart()
// function preparePurchase() {
//     // Remove from cart
//     let removeFromCart = document.getElementsByClassName('removeCart');
//     for (let i = 0; i < removeFromCart.length; i++);

// End of Cart