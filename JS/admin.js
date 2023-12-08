// Variable for Products
let product = [];
let mainProduct = document.querySelector("#mainProduct");
let searchInput = document.querySelector(".searchInput");
let typeFilter = document.querySelector(".typeFilter");

// Constructor function to create objects
function Product(id, name, description, price, url, type) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.url = url;
  this.type = type;
  this.quantity = this.quantity;
}
// retrieves the product using getitem (returns the value given)
// initialize the set products
if (localStorage.getItem("product")) {
  // converting the string into an object - turning product string into an object
  product = JSON.parse(localStorage.getItem("product"));
} else {
  // If not, initialize with default products
  let product1 = new Product(
    1,
    "ANTI SOCIAL HENTAI CLUB TEE",
    "100% organic cotton blend.",
    350,
    "https://i.postimg.cc/Zq1NjHnX/rgergegeg-768x768.png",
    "Tshirt, 0"
  );
  // Product2
  let product2 = new Product(
    2,
    "DEMON MODE, BLACK CLOVER - KNITTED SWEATER",
    "Nothing lasts longer than knitwear, will never fade because the design is woven into the clothing.",
    700,
    "https://i.postimg.cc/pTrF2S79/DSC07691-1-1536x1536.jpg",
    "Tshirt, 0"
  );
  // Product3
  let product3 = new Product(
    3,
    "YANDERE WHITE TEE - RELEASE",
    "100% organic cotton blend.",
    300,
    "https://i.postimg.cc/WbBC0Lwv/5-768x768.jpg",
    "Shirt", 0
  );
  // Product4
  let product4 = new Product(
    4,
    "ENVY - CUT OUT FITTED HALTER TOP",
    "Made from soft, stretchy and comfortable material.",
    330,
    "https://i.postimg.cc/Y03V7hmf/cover-768x768.jpg",
    "Crop-Top", 0
  );
  // Product5
  let product5 = new Product(
    5,
    "CALL ME SENPAI",
    "100% organic cotton blend.",
    300,
    "https://i.postimg.cc/wBN6h8P8/Senpai03.jpg",
    "Tshirt", 0
  );
  // Product6
  let product6 = new Product(
    6,
    "RORONOA ZOROR WHITE TEE",
    "100% organic cotton blend.",
    350,
    "https://i.postimg.cc/CLfSyVhZ/IMG-8797-768x768.jpg",
    "Tshirt", 0
  );
  // Product7
  let product7 = new Product(
    7,
    "LUFFY X JOYBOY BLACK TEE",
    "100% organic cotton blend.",
    300,
    "https://i.postimg.cc/xCygN83k/fgfhr-768x768.jpg",
    "Tshirt", 0
  );
  // Product8
  let product8 = new Product(
    8,
    "ENVY - FEMALE CARGO PANTS, GREY",
    "Pleated knees for silhouette. Adjustable hem with drawstrings.",
    700,
    "https://i.postimg.cc/PxsTr3SX/cover-2-1536x1536.jpg",
    "Pants", 0
  );
  // Product19
  let product9 = new Product(
    9,
    "BALACLAVA",
    "Description",
    250,
    "https://i.postimg.cc/PrM74kcG/4-1-scaled-570x570_(1).jpg",
    "Headwear", 0
  );
  // Product10
  let product10 = new Product(
    10,
    "WE DID IT BETTER BLACK CARGO",
    "Comfortable, stretchable waist and metal-tipped drawstrings.",
    699.99,
    "https://i.postimg.cc/tJnfnf3m/landingPage1.jpg",
    "Pants", 0
  );
  // Product11
  let product11 = new Product(
    11,
    "PHANTOM WHITE TEE",
    "100% organic cotton blend.",
    290,
    "https://i.postimg.cc/jqX0GQJ7/01-820x820.jpg",
    "Tshirt", 0
  );
  // Product12
  let product12 = new Product(
    12,
    "DREAMING WHITE TEE",
    "100% organic cotton blend.",
    290,
    "https://i.postimg.cc/QNHYq2rV/COVER-1-scaled-600x600.jpg",
    "Tshirt", 0
  );

  // Pushing my items into an array for storage
  product.push(
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12
  );

  // Store in local storage
  localStorage.setItem("product", JSON.stringify(product));
}

// function creation for products to display
function renderProducts(products) {
  let productsHTML = products.map(function (item, index) {
    return `
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">URL</th>
          <th scope="col">Quantity</th>
          <th scope="col">CRUD</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">${item.id}</th>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td>R${item.price}</td>
          <td><img class="admin-image" src="${item.url}"></td>
          <td>${item.quantity}</td>
          <td>
            <button class="delete btn btn-primary" data-delete="${index}">Delete</button>
            <button class="btn btn-primary" data-add value="${index}">Add To Cart</button>
          </td>
        </tr>
      </tbody>
    </table>
    `;
  });
  // want element to display within the element itself - displaying it to the user
  mainProduct.innerHTML = productsHTML.join("");
}

// Load products from local storage on page load using the function onload
window.onload = function onload() {
  // by turning the string into an object and if it does reflect, reveal a new or empty object
  product = JSON.parse(localStorage.getItem("product")) || [];
  renderProducts(product);
};
// event listener created to function with the delete button to remove the product from the screen
mainProduct.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    // doing this by targeting the index of the product
    let index = event.target.dataset.delete;
    remove(index);
  }
});
// function to aid the delete function by removing the product but returning it once we refresh the onload event
function remove(index) {
  // returns the array that was deleted
  product.splice(index, 1);
  updateLocal();
  renderProducts(product);
}
// function to aid the update function
function updateLocal() {
  // saves the product in localStorage
  localStorage.setItem("product", JSON.stringify(product));
  // by turning the string into an object and if it does reflect, reveal a new or empty object
  product = JSON.parse(localStorage.getItem("product")) || [];
}

// Modal Functioning
// function to create new product object
function createProduct() {
  // new variable sets its value to the length of the product array +1
  // Assigns a unique ID to each new product
  let id = product.length + 1;
  // variable to assign a new product using a unique ID
  let name = document.querySelector("#nameInput").value;
  let description = document.querySelector("#descriptionInput").value;
  let price = document.querySelector("#priceInput").value;
  let url = document.querySelector("#urlInput").value;
  let type = document.querySelector("#typeInput").value;

  // constructor function to create a new product when added in
  let productCreation = new Product(id, name, description, price, url, type);
  // push information in the array
  product.push(productCreation);
  // stores in the local storagee
  localStorage.setItem("product", JSON.stringify(product));
  updateLocal();
  renderProducts(product);
}

// Save Changes Button
let save = document.getElementById("createProducts");
save.addEventListener("click", createProduct);

// Delete button
mainProduct.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    let deleteById = event.target.dataset.delete;
    remove(deleteById);
  }
});

// Search and sorting
// function created to search and sort through all products
function updateProducts() {
  // variable set to return a section of the array being called
  let filteredProducts = product.slice();
  // variable to allow lowercase values to function in search bar
  let searchTerm = searchInput.value.toLowerCase();
  // conditional statement
  if (searchTerm) {
    // callback function executed using filter to return a specified name, description and type of the product
    filteredProducts = filteredProducts.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm)
    );
  }

  // new variable set with a value of typeFilter
  let selectedType = typeFilter.value.toLowerCase();
  // Conditional statement that checks if selectedType is not equal to "all"
  if (selectedType !== "all") {
    // filters array based on the conditional statement
    filteredProducts = filteredProducts.filter(
      (item) => item.type.toLowerCase() === selectedType
    );
  }

  renderProducts(filteredProducts);
}

searchInput.addEventListener("input", updateProducts);
typeFilter.addEventListener("change", updateProducts);