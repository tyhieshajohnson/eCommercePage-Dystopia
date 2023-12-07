let mainProduct = document.querySelector('main');

let product = JSON.parse(localStorage.getItem('product')) //|| [];; 

let purchased = [];
// purchased = JSON.parse(localStorage.getItem('purchased')) //|| [];;

mainProduct.innerHTML = product.map(function(item, index) {
    return `
    <div class="card" style="width: 18rem;">
    <img class="img-fluid" src='${item.url}'>
    <h5>${item.name}</h5>
    <p>${item.description}</p>
    <h4>${item.price}</h4>
    <button class="btn btn-primary" data-add value="${index}">Add To Cart</button>
    </div>
`
}).join('');

function add(index) {
    // adds new element at the ned with a new length
    purchased.push(product[index]);
    // ccreating a new value
    localStorage.setItem('purchased', JSON.stringify(purchased));
    purchased = JSON.parse(localStorage.getItem('purchased'));
}

mainProduct.addEventListener('click', function(event) {
    console.log('Event Listener clicked');
    if (event.target.hasAttribute('data-add')) {
       add(event.target.value)
    }
});

console.log(localStorage.getItem('product'));

// Product Sorting and Filtering