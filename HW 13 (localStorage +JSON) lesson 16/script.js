// localStorage.setItem("objectTest", { name: "Marko", age: 18 })
// localStorage.removeItem("objectTest")


// JSON format
// JSON javaScript object notation

// stringify, parse

// stringify
// const person = { name: "Joe", age: 18 }
// const personSrt = JSON.stringify(person)
// console.log(personSrt);
// console.log(typeof personSrt);

// // parse
// const newPreson = JSON.parse(personSrt)
// console.log(newPreson);

// //------1------
// const game = { level: 5, type: "hard" }
// const gameStr = JSON.stringify(game)

// localStorage.setItem("infoAboutGame", gameStr)
// const newGameStr = localStorage.getItem('infoAboutGame')
// const newGame = JSON.parse(newGameStr)
// console.log(newGame);
// localStorage.removeItem("infoAboutGame")


// ------2-------
//У нас есть строковый массив с числами. Используя JSON преобразуйте эту строку в массив,
// добавьте туда пару чисел и добавьте в localStorage.
// const number = "[1,2,3]"
// const numberArr = JSON.parse(number)
// numberArr.push(2)
// console.log(numberArr);
// const numberStr = JSON.stringify(numberArr)
// console.log(numberStr);
// const newNumber = localStorage.setItem("newNumber", numberStr)

// -------3-------
//Напишите две функции writeLocalStorage и readLocalStorage.
// Функции должны записывать и считывать обьекты в localStorage соответственно.
// function writeLocalStorage(key,str) {
//     localStorage.setItem(key, JSON.stringify(str))
// }
// //      str
// const number = [1, 2, 3, 4]
// const person = {name:"Joe", age:19}

// //                   key     str
// writeLocalStorage("number",number)
// writeLocalStorage("person",person)


// function readLocalStorage(key) {
//     const newString = localStorage.getItem(key)
//     if (newString) {
//         const value = JSON.parse(newString)
//         return value
//     } else {
//         return null;
//     }
// }
// //                                     key
// const sumNumbers = readLocalStorage("number")
// console.log(sumNumbers);

// const sum = sumNumbers.reduce((acc, cur) => acc + cur)
// console.log(sum);

//------4------(form)
const form = document.querySelector(".prodct-form")
const nameInput = document.querySelector("#name")
const priceInput = document.querySelector("#price")
const ul = document.querySelector(".product-list")

// массив с продуктами
let products = [];

function saveDate() {
    if (localStorage.getItem('obj')) {
        products = JSON.parse(localStorage.getItem("obj"))
    }
}


// функция для добавления продукта в массив
function newProduct(name, price) {
    products.push({ name: name, price: price })
    
}

// функция для обновления пунктов в ul
function updateUl() {
    //очистить ul
    ul.innerHTML = ""
    products.forEach((product)=>{
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.innerText = `${product.name} - ${product.price}$`
        li.append(a)
        ul.append(li);
    })
    
}

// обработчик отправки формы
form.onsubmit=(e)=>{
    e.preventDefault();
    const nameInputValue = nameInput.value;
    const priceInputValue = parseFloat(priceInput.value);
    newProduct(nameInputValue, priceInputValue);
    nameInput.value = "";
    priceInput.value = "";
    updateUl();
    local(products)
    
}

// добавления в localStorage обьект
function local(str) {
    let productsStr = JSON.stringify(str)
    localStorage.setItem("obj", productsStr)
    
}

saveDate()
updateUl()

