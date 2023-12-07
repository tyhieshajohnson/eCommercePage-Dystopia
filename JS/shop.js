// define 
let mainProduct = document.querySelector('main');
let searchInput = document.querySelector('.searchInput');
let priceFilter = document.querySelector('.priceFilter');
let typeFilter = document.querySelector('.typeFilter');
let filteredProducts = [];

function updateProducts() {
    let filteredProducts = product.slice();
    let searchTerm = searchInput.value.toLowerCase();

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(item =>
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm) ||
            item.type.toLowerCase().includes(searchTerm)
        );
    }

    let selectedType = typeFilter.value.toLowerCase();
    if (selectedType !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.type.toLowerCase() === selectedType);
    }

    mainProduct.innerHTML = filteredProducts.map(function (item, index) {
        return `
        <div class="card" style="width: 18rem;">
            <img class="img-fluid" src='${item.url}'>
            <h5>${item.name}</h5>
            <p>${item.type}</p>
            <p>${item.description}</p>
            <h4 class="priceFilter">${item.price}</h4>
            <button class="btn btn-primary" data-add value="${index}">Add To Cart</button>
        </div>
        `;
    }).join('');
}

function add(index) {
    purchased.push(product[index]);
    localStorage.setItem('purchased', JSON.stringify(purchased));
    purchased = JSON.parse(localStorage.getItem('purchased'));
}

function initialize() {
    product = JSON.parse(localStorage.getItem('product')) || [];
    mainProduct.innerHTML = product.map(function(item, index) {
        return `
        <div class="card" style="width: 18rem;">
            <img class="img-fluid" src='${item.url}'>
            <h5>${item.name}</h5>
            <p>${item.description}</p>
            <h4 class="priceFilter">${item.price}</h4>
            <button class="btn btn-primary" data-add value="${index}">Add To Cart</button>
        </div>
        `;
    }).join('');

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
}

initialize();