const form = document.querySelector('.form')
const product = document.querySelector('#product')
const price = document.querySelector('#price')
const sectionNodes = document.querySelector('#nodes')
const btn = document.getElementById('sum')

const products = []
form.onsubmit = (e) => {
    e.preventDefault()
    products.push({
        product: product.value,
        price: price.value
    })
    newCard()
    product.value = ""
    price.value = ""
    
}

function createNode(product, price) {
    let div = document.createElement('div')
    div.classList.add('node')
    
    let productP = document.createElement('p')
    let priceP = document.createElement('p')

    productP.innerText = product
    priceP.innerText = price

    div.append(productP,priceP)
    sectionNodes.append(div)
}


function newCard() {
    sectionNodes.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        createNode(products[i].product, products[i].price)
        
    }
}

btn.onclick = () => {
    let sum = 0;
    if (products.length == 0) {
        alert("Firstly add products")
    } else {
        for (let i = 0; i < products.length; i++) {
        sum += +products[i].price
    }
    alert("End price: "+sum)
    }
    
}


//------2------
const passform = document.querySelector('.passform')
const password = document.querySelector('#password')
const btn2 = document.getElementById('loock')


btn2.onclick = () => {
    if (password.getAttribute('type') ==='password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
        
    
    // password.setAttribute('type','text')
}


















//----1-----(1)
// btn.onclick = (e) => {
//     //preventDefault - для отмены значений браузера по умаолчанию
//     e.preventDefault()
//     alert("It's work")
// }

//input's value

// ----1-----(2)
// forma.onsubmit = (e) => {
//     e.preventDefault()
//     alert(names.value)
// }
