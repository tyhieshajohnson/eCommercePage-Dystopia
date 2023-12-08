let item = JSON.parse(localStorage.getItem('item'));
let toCart = document.querySelector('#toCart');
// Ternary operator - get purchased items from cart and if not, create an empty array
let purchased = JSON.parse(localStorage.getItem('purchased'));
let purchasedProduct = [];
let mainProduct = document.getElementById('mainProduct');
let deleteButton = document.querySelector('.delete');

// Add to cart function 
function addToCart() {
    // 
    let product = purchased.map(function(item, index){
          return `
          <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${item.id}</th>
              <td>${item.name}</td>
              <td>${item.description}</td>
              <td>R${item.price}</td>
              <td><img class="img-cart" src =${item.url}</td>
              <button class="delete btn btn-light">Delete</button>
              <button class="btn btn-light" data-add value="${index}">Add To Cart</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    `
    }).join('')
    mainProduct.innerHTML = product
};
addToCart()

// Remove from cart
// function to remove from cart
// onload function for displaying and removing from cart
window.onload = function onload() {
function updateLocal(){
    localStorage.setItem('purchased',JSON.stringify(purchased));
    //sets the array from local storage array(items)in code
    product = JSON.parse(localStorage.getItem('purchased'));
    }

function remove(index) {
    // remove item from array
    purchased.splice(index,1)
    updateLocal()
    onload()
}
addToCart('');

mainProduct.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        let index = event.target.getAttribute('data-index');
        remove(index);
    }
});
};

// End of Cart