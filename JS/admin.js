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
let product1 = new Product(1, "ANTI SOCIAL HENTAI CLUB TEE", "100% organic cotton blend.", 350, 'https://i.postimg.cc/Zq1NjHnX/rgergegeg-768x768.png', 'Tshirt')
// Product2
let product2 = new Product(2, "DEMON MODE, BLACK CLOVER - KNITTED SWEATER", "Nothing last longer than knitwear, will never fade because the design is woven into the clothing.", 700, 'https://i.postimg.cc/pTrF2S79/DSC07691-1-1536x1536.jpg', 'Tshirt')
// Product3
let product3 = new Product(3, "YANDERE WHITE TEE - RELEASE", "100% organic cotton blend.", 300, 'https://i.postimg.cc/WbBC0Lwv/5-768x768.jpg', 'Shirt')
// Product4
let product4 = new Product(4, "ENVY - CUT OUT FITTED HALTER TOP", "Made from soft, stretchy and comfortable material.", 330, 'https://i.postimg.cc/Y03V7hmf/cover-768x768.jpg', 'Croptop')
// Product5
let product5 = new Product(5, "CALL ME SENPAI", "100% organic cotton blend.", 300, 'https://i.postimg.cc/wBN6h8P8/Senpai03.jpg', 'Tshirt')
// Product6
let product6 = new Product(6, "RORONOA ZOROR WHITE TEE", "100% organic cotton blend.", 350, 'https://i.postimg.cc/CLfSyVhZ/IMG-8797-768x768.jpg', 'Tshirt')
// Product7
let product7 = new Product(7, "LUFFY X JOYBOY BLACK TEE", "100% organic cotton blend.", 300, 'https://i.postimg.cc/xCygN83k/fgfhr-768x768.jpg', 'Tshirt')
// Product8
let product8 = new Product(8, "ENVY - FEMALE CARGO PANTS, GREY", "Pleated knees for sillouette. Adjustable hem with drawstrings.", 700, 'https://i.postimg.cc/PxsTr3SX/cover-2-1536x1536.jpg', 'Pants')
// Product19
let product9 = new Product(9, "BALACLAVA", "Description", 250, 'https://i.postimg.cc/PrM74kcG/4-1-scaled-570x570_(1).jpg', 'Headwear')
// Product10
let product10 = new Product(10, "WE DID IT BETTER BLACK CARGO", "Comfortable, stretchable waist and metal tipped drawstrings.", 699.99, 'https://i.postimg.cc/tJnfnf3m/landingPage1.jpg', 'Pants')
// Product11
let product11 = new Product(11, "PHANTOM WHITE TEE", "100% organic cotton blend.", 290, 'https://i.postimg.cc/jqX0GQJ7/01-820x820.jpg', 'Tshirt')
// Product12
let product12 = new Product(12, "DREAMING WHITE TEE", "100% organic cotton blend.", 290, 'https://i.postimg.cc/QNHYq2rV/COVER-1-scaled-600x600.jpg', 'Tshirt')

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

function createProduct(){
    // intialize the id counter
    let id = product.length + 1

    // retrieve input values with unique id names
    let name = document.querySelector('#nameInput').value;
    let description = document.querySelector('#descriptionnInput').value;
    let price =  document.querySelector('#priceInput').value;
    let url =  document.querySelector('#urlInput').value;
    let type =  document.querySelector('#typeInput').value;

    // create new Product
    let productCreation = new Product(++id, nameInput.value, descriptionInput.value, priceInput.value, urlInput.value, typeInput.value);
    // push new product into array
    product.push(productCreation);
    // localStorage updating
    updateLocal();

    // Display the product
    mainProduct.innerHTML +=
    `
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
            <th scope="row">${productCreation.id}</th>
            <td>${productCreation.name}</td>
            <td>${productCreation.description}</td>
            <td>${productCreation.price}</td>
            <td><img src="${productCreation.url}" alt="Product Image"></td>
            <td>
                <button class="delete btn btn-primary" data-delete="${id}">Delete</button>
                <button class="btn btn-primary" data-add value="${id}">Add To Cart</button>
            </tr>
          </tbody>
        </table>
    </div>
    `
}

// Save Changes Button
let save = document.getElementById('createProducts');
save.addEventListener('click', createProduct);

// Delete button
mainProduct.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    // delete by ID
    let deleteById = event.target.dataset.delete;
    remove(deleteById);
  }
});