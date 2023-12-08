//variables cretaed targeting ids and class names
let mainProduct = document.querySelector('#mainProduct');
//loader event listener
let searchInput = document.querySelector('.searchInput');
let priceFilter = document.querySelector('.priceFilter');
let typeFilter = document.querySelector('.typeFilter');
let sumOfBtn = document.querySelector('#sumOfBtn');
//empty arrays
let filteredProducts = [];
let purchased = []; 

// function to filter products (search and sort)
function updateProducts() {
    let filteredProducts = product.slice();
    let searchTerm = searchInput.value.toLowerCase();
    //search bar
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(item =>
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm) ||
            item.type.toLowerCase().includes(searchTerm)
        );
    }
    //sorting
    let selectedType = typeFilter.value.toLowerCase();
    if (selectedType !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.type.toLowerCase() === selectedType);
    }
    //iterate this onto the display
    mainProduct.innerHTML = filteredProducts.map(function (item, index) {
        return `
        <div class="card" style="width: 18rem;">
            <img class="img-fluid" src='${item.url}'>
            <h5>${item.name}</h5>
            <p>${item.type}</p>
            <p>${item.description}</p>
            <h4 class="priceFilter">${item.price}</h4>
            <button class="btn btn-danger" data-add value="${index}">Add To Cart</button>
        </div>
        `;
    }).join('');
}
// adding purchased products to the cart via local storage
function add(index) {
    purchased.push(product[index]);
    localStorage.setItem('purchased', JSON.stringify(purchased));
    purchased = JSON.parse(localStorage.getItem('purchased'));
}

// function for revealing ALL products by overwriting existing if one does not exist
function recover() {
    product = JSON.parse(localStorage.getItem('product')) || [];
    mainProduct.innerHTML = product.map(function(item, index) {
        return `
        <div id="gridContainer">
        <div class="card" style="width: 18rem;">
        <img class="img-fluid" src='${item.url}'>
        <h5>${item.name}</h5>
        <p>${item.description}</p>
        <h4 class="priceFilter">${item.price}</h4>
        <button id="sumOfBtn" class="btn btn-primary" data-add value="${index}">Add To Cart</button>
        </div>
        </div>
        `
    }).join('');

    // conditional statement: if all isn't shown then search would show, or type.
    if (searchInput) {
        searchInput.addEventListener('input', updateProducts);
    }

    if (typeFilter) {
        typeFilter.addEventListener('change', updateProducts);
    }

    if (mainProduct) {
        mainProduct.addEventListener('click', function (event) {
            if (event.target.hasAttribute('data-add')) {
                add(event.target.value);
            }
        });
    }

    if (sumOfBtn) {
        sumOfBtn.addEventListener('click', total); 
    }
}

recover();

// Sum function
function total() {
    let totalPrice = 0;
    let totalAmount = purchased.length;

    purchased.forEach(item => {
        totalPrice += item.price;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("loaderOverlay").style.display = "none";
      document.getElementById("displayContent").style.display = "block";
    }, 1500);
});