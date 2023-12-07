// Variable for Products
let product = []

mainProduct = document.querySelector('#mainProduct')

// Contrustor function to create objects
function Product (id, name, description, price, url, type) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = url;
    this.type = type;
}

// Creating the object
// Product 1
let product1 = new Product(1, "Tshirt", "Description", 250, 'https://i.postimg.cc/Zq1NjHnX/rgergegeg-768x768.png', 'Shirt')
// Product2
let product2 = new Product(2, "Jersey", "Description", 250, 'https://i.postimg.cc/pTrF2S79/DSC07691-1-1536x1536.jpg', 'Shirt')
// Product3
let product3 = new Product(3, "Tshirt", "Description", 250, 'https://i.postimg.cc/WbBC0Lwv/5-768x768.jpg', 'Shirt')
// Product4
let product4 = new Product(4, "Crop-Top", "Description", 250, 'https://i.postimg.cc/Y03V7hmf/cover-768x768.jpg', 'Croptop')
// Product5
let product5 = new Product(5, "Tshirt", "Description", 250, 'https://i.postimg.cc/wBN6h8P8/Senpai03.jpg', 'Tshirt')
// Product6
let product6 = new Product(6, "Tshirt", "Description", 250, 'https://i.postimg.cc/CLfSyVhZ/IMG-8797-768x768.jpg', 'Tshirt')
// Product7
let product7 = new Product(7, "Tshirt", "Description", 250, 'https://i.postimg.cc/xCygN83k/fgfhr-768x768.jpg', 'Tshirt')
// Product8
let product8 = new Product(8, "Tshirt", "Description", 250, 'https://i.postimg.cc/PxsTr3SX/cover-2-1536x1536.jpg', 'Tshirt')
// Product19
let product9 = new Product(9, "Tshirt", "Description", 250, 'https://i.postimg.cc/PrM74kcG/4-1-scaled-570x570_(1).jpg', 'Headwear')
// Product10
let product10 = new Product(10, "Tshirt", "Description", 250, 'https://i.postimg.cc/tJnfnf3m/landingPage1.jpg', 'Pants')
// Product11
let product11 = new Product(11, "Tshirt", "Description", 250, 'https://i.postimg.cc/jqX0GQJ7/01-820x820.jpg', 'Tshirt')
// Product12
let product12 = new Product(12, "Tshirt", "Description", 250, 'https://i.postimg.cc/QNHYq2rV/COVER-1-scaled-600x600.jpg', 'Tshirt')

// pushing intems into an array storing
product.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12);

// items is the 'key' and the name of the array here
// how to store in local storage:
localStorage.setItem('product',JSON.stringify(product));

// the reason for this is to add or reload the object in the localStorage

// sets the array from local storage to to array (item) in code
product = JSON.parse(localStorage.getItem('product'));

window.onload = function onload() {

    // looping through every object in the array (.map)
    // returning items and the index of the object
let products = product.map(function(item, index) {
    return `
    <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">URL</th>
              <th scope="col">CRUD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${item.id}</th>
              <td>${item.name}</td>
              <td>${item.description}</td>
              <td>${item.price}</td>
              <td><img src =${item.url}</td>
              <td><button class="delete btn btn-primary">Delete</button>
              <button class="btn btn-primary" data-add value="${index}">Add To Cart</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    `
});

mainProduct.innerHTML = products.join("");
}

let deleteButton = document.querySelector('.delete');
mainProduct.addEventListener('click', function(){
    // using a conditional statement by declaring the button that is clicked
    if (event.target.classList.contains('delete')){
        remove()
        // alert('event.targer.value)');
        remove(event.target.value)
    }
});

function remove(item,index) {
    product.splice(index,1)
    updateLocal()
    onload()
}

mainProduct.innerHTML = product.join('');

function updateLocal(){
localStorage.setItem('product',JSON.stringify(product));
//sets the array from local storage array(items)in code
product = JSON.parse(localStorage.getItem('product'));
}

// Modal Functioning 
// document.getElementById('createProducts')
// .addEventListener('click', productCreationModal(){
//     function createProducts(event) {
//         event.preventDefault();
        
//         let nameInput = document.getElementById('nameInput');
//         let descriptionInput = document.getElementById('descriptionInput');
//         let priceInput = document.getElementById('priceInput');
//         let urlInput = document.getElementById('urlInput');
//         let typeInput = document.getElementById('typeInput');

//         if (isNaN(nameInput) || !nameInput || !priceInput || !urlInput || !typeInput) {
//             alert("Please add in all values.");
//             return;
//           }
//     }
// };

function createProduct(){
    // intialize the id counter
    let id = product.length
    // create
    let productCreation = new Product(++id, nameInput.value, descriptionInput.value, priceInput.value, urlInput.value, typeInput.value);
    productCreation.push(product);
    localStorage.setItem('product', JSON.stringify(product));
    // Display the product
    return `
    <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">URL</th>
              <th scope="col">CRUD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${item.id}</th>
              <td>${item.nameInput}</td>
              <td>${item.description}</td>
              <td>${item.price}</td>
              <td><img src =${item.url}</td>
              <td><button class="delete btn btn-primary">Delete</button>
              <button class="btn btn-primary" data-add value="${index}">Add To Cart</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    `
}

// Attaching function to button element