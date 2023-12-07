let mainProduct = document.querySelector('main');

let product = JSON.parse(localStorage.getItem('product')) || [];; 

let purchased = JSON.parse(localStorage.getItem('purchased')) || [];;

mainProduct.innerHTML = product.map(function(item, index) {
    return `
    <div class="card" style="width: 18rem;">
    <img class="img-fluid" src='${item.url}'>
    <h5>${item.name}</h5>
    <p>${item.description}</p>
    <h4>${item.price}</h4>
    <a href="#" class="btn btn-primary" data-add="${item.index}"><button>Add To Cart</button></a>
    </div>
`
}).join('');

function add(index) {
    // adds new element at the ned with a new length
    purchased.push(product[index]);
    // ccreating a new value
    localStorage.setItem('purchased', JSON.stringify(purchased));
    // purchased = JSON.parse(localStorage.getItem('purchased'));
}

mainProduct.addEventListener('click', function(event) {
    if (event.target.hasAttribute('[data-add]')) {
        let index = event.target.getAttribute('[data-index]').dataset.index;
        add(index);
    }
});