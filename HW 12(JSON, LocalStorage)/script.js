const form = document.querySelector(".form")
const btnMinus = document.querySelector("#minus")
const number = document.querySelector("#number")
const btnPlus = document.querySelector("#plus")

let count = 0;
btnMinus.onclick=(e)=> {
    e.preventDefault(e)
    count--
    number.textContent = count
    addToLocalStorage(count)
}
btnPlus.onclick=(e)=> {
    e.preventDefault(e)
    count++
    number.textContent = count
    addToLocalStorage(count)
    
}
function addToLocalStorage(num) {
    localStorage.setItem("number", num)
}
let saveNumber = JSON.parse(localStorage.getItem("number"))
count=saveNumber
number.textContent = saveNumber
