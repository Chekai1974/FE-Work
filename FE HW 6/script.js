
// 1) Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя
// javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф,
// а при повторном клике появлялся обратно.
const btn = document.createElement('button')
btn.style.cssText = "width: 400px; height: 150px; background-color: aquamarine; border: 2px solid black; border-radius: 10px; cursor: pointer;"

const p = document.createElement('p')
p.innerText = "Click on ME"
p.style.cssText = "font-size: 44px; color: cornflowerblue"
btn.append(p)

const div = document.createElement('div')
div.style.cssText = "width: 200px; height: 100px; text-align: center;;background-color: rgba( 180 , 71 , 195 , 0.3 ); display: table; margin-top: 20px; margin-left: 80px; border-radius: 10px;"

const pMain = document.createElement('p')
pMain.innerText = "BE HAPPY"
pMain.classList.add('show')

btn.onclick = () => {
    pMain.classList.toggle('hide')
}


div.append(pMain)
document.body.append(btn, div)



//2) Создайте массив, содержащий названия цветов.На основе этого массива создайте список.
//При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.

const colors = [
    'Black',
    'Gray',
    'Silver',
    'White',
    'Fuchsia',
    'Purple',
    'Red',
    'Maroon',
    'Yellow',
    'Olive',
    'Lime',
    'Green',
    'Aqua',
    'Teal',
    'Blue',
    'Navy',
]
const text = document.createElement("h1")
text.innerText = "HOVER ON NAME OF COLORS"
document.body.append(text)
const ul = document.createElement("ul")
for (let i = 0; i < colors.length; i++) {
    let li = document.createElement("li")
    li.innerText = colors[i]
    li.style.marginBottom = "10px"
    li.style.fontSize = "22px"
    li.style.cssText = "width: -webkit-fit-content; width: -moz-fit-content; width: fit-content; font-size: 22px; margin-bottom = 10px"
    ul.append(li)

    li.onmouseover = () => {
        document.body.style.backgroundColor = li.textContent
    }
    li.onmouseout = () => {
        document.body.style.backgroundColor = 'white'
    }


    document.body.append(ul)
}

// 3) Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива.
// При клике на заголовок внизу появляется краткое описание данного фильма.
const h2 = document.createElement('h1')
h2.innerText = "CLICK ON PHOTO"
document.body.append(h2)
const cards = [
    "img/Я легенда.png",
    "img/Выживший.png",
    "img/Легенда.png",
    "img/Гари Потер.png",
]
const films = [
    "Я легенда",
    "Выживший",
    "Легенда",
    "Гарри Поттер и принц-полукровка",
]

const descript = [
    "Американский постапокалиптический фильм 2007 года про людей, заражённых вирусом, изменившим их до неузнаваемости. Режиссёр — Фрэнсис Лоуренс. Фильм является экранизацией одноимённого романа Ричарда Мэтисона.",
    "Американский эпический остросюжетный вестерн 2015 года режиссёра Алехандро Г. Иньярриту.",
    "Инофильм британско-французского производства, поставленный американским режиссёром Брайаном Хелгелендом по мотивам книги Джона Пирсона «Искусство жестокости: взлёт и падение близнецов Крэй», основанный на реальных событиях.",
    "Приключенческий фэнтезийный фильм 2009 года режиссёра Дэвида Йейтса, шестой из серии фильмов о Гарри Поттере. Экранизация одноимённого романа (2005) Дж. К. Роулинг.",
]


const mainDiv = document.createElement("div")
mainDiv.style.display = "inline-flex"
mainDiv.style.justifyContent = "space-around"
mainDiv.style.width = "100%"
for (let i = 0; i < cards.length; i++) {
    let divs = document.createElement('div')
    divs.style.display = "inline-block"

    let imgs = document.createElement('img')
    imgs.src = cards[i]
    imgs.style.cursor = "pointer"
    imgs.classList.add('imgs')

    let h2 = document.createElement('h2')
    h2.innerText = films[i]

    
    let description = document.createElement('p')
    description.innerText = descript[i]
    description.classList.add('des1')
    description.style.width = "300px"
    
    imgs.onclick = () => {
        description.classList.toggle('des2')
    }

    divs.append(imgs,h2,description)
    mainDiv.append(divs)
    
}

document.body.append(mainDiv)



// Дополнительные задачи:
let keyboard = ['Escape', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Control', 'Meta', 'Alt', ' ', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

const h1 = document.createElement('h1')
h1.innerText = "TEST YOUR KEYBOARD (press key)"
document.body.append(h1)
const init = () => {
    for (let i = 0; i < keyboard.length; i++) {
        let p = document.createElement('p')
        p.innerText = keyboard[i]
        p.style.display = 'inline-flex'
        p.classList.add('k-key')
        
        if (i == 14 || i == 27 || i == 39 || i == 51) {
            p.classList.add('clear')
        }
        
        document.addEventListener('keydown',  (e) => {
            let res = e.key
            if (res === p.textContent) {
                p.style.backgroundColor = "red"
            }
        })
        if (p.textContent === " ") {
            p.classList.add('space')
        }
        document.body.append(p)
    }

    
}
init()
