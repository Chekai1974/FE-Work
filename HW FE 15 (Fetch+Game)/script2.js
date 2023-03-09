const form = document.querySelector('form')
const btn = document.querySelector('#save')
const divListUl = document.querySelector('.listUl')
const btnDelete = document.querySelector('#delete')
btn.onclick = () => {
    btn.classList.toggle('save')
}

btnDelete.onclick = () => {
    const ulForDel = document.getElementsByClassName('ul')
    const arrUl = []
    for (const iterator of ulForDel) {
        arrUl.push(iterator)
        
    }
    arrUl[arrUl.length-1].remove()
}

form.onsubmit = (e) => {
    e.preventDefault()
    if (btn.classList.contains('save')) {
        all()
    } else {
        const list = document.querySelectorAll('.ul')
        list.forEach(list => list.remove())
        all()
    }

}
function all() {
    const postId = document.querySelector('#post-id').value
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((json) => {
            const ul = document.createElement('ul')
            ul.classList.add('ul')
            json.forEach(element => {
                const li = document.createElement('li')
                const email = document.createElement('h5')
                const nam = document.createElement('p')
                const body = document.createElement('p')
                email.innerText = `EMAIL: ${element.email}`
                nam.innerText = `NAME: ${element.name}`
                body.innerText = `BODY: ${element.body}`
                li.append(email, nam, body)
                ul.append(li)
                divListUl.append(ul)
            });
        }).catch(error => { console.error(error) })
}

// GAME


const form2 = document.querySelector('#form2')
const btn2 = document.querySelector('#btn2')
const divPhoto = document.querySelector('.photo')
let point = 0;
let oldId = [];
let counter = 0;

btn2.onclick = (e) => {
    e.preventDefault()
    
    const input = document.querySelector('#input').value;
    
    if (counter>=3) {
        alert("You can only 3 photo add")
        return
    }
    fetch(`https://jsonplaceholder.typicode.com/photos/${input}`)
        .then((response) => response.json())
        .then(json => {
            const url = json.thumbnailUrl;
            const img = document.createElement('img')
            img.classList.add("newUrl")
            const divForPandImg = document.createElement('div')
            divForPandImg.classList.add('pImg')
            const p = document.createElement('p')
            p.classList.add("par")
            p.innerText = `Id: ${input}`
            oldId.push(input)
            img.src = url
            divForPandImg.append(p,img)
            divPhoto.append(divForPandImg)
            counter++
        }).catch(error => {
            console.error(error);
            alert('Failed to load image!');
        })
    if (btn2) {
        const input = document.querySelector('#input')
        input.value = ""
    }
}
    


const btnMix = document.querySelector('#btnMix')
const img = document.getElementsByTagName('img')
let h4Point = document.querySelector('#point')
let newIdMix = []

btnMix.onclick = (e) => {
    e.preventDefault()
    newPhoto()
    clickOnImg()
}
function mixArr(arr) {
    console.log(arr);
    return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
}
function newPhoto() {
    const  ar = document.getElementsByClassName('newUrl')
    for (let item of ar) {
        item.src = "https://avotar.ru/avatar/krutye/150/46.jpg" 
    }
    const pp = document.getElementsByClassName('par')
    newIdMix = mixArr(oldId)
    for (const iterator of pp) {
        iterator.innerHTML = ""
    }
    // pp[0].innerText = newIdMix[0]
    ar[0].setAttribute('id', newIdMix[0])
    // pp[1].innerText = newIdMix[1]
    ar[1].setAttribute('id', newIdMix[1])
    // pp[2].innerText = newIdMix[2]
    ar[2].setAttribute('id', newIdMix[2])
    console.log(newIdMix);
}
function clickOnImg() {
    for (const elem of img) {
        elem.onclick = () => {
            if (point !== 4) {
                if (elem.id === oldId[0]) {
                    point++
                    h4Point.innerText = point
                    newPhoto()
                } else {
                    alert("Не угадал")
                }
            }else {
                alert("Congratulations Go ---> https://vjoy.cc/wp-content/uploads/2020/05/4766631295e84922196c8a_medium.png")
            }
        }
    }
}

