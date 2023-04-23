const section = document.querySelector('#section');
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');
const main_card = document.querySelector('.main-card');
const button1 = document.querySelector('#next')
const button2 = document.querySelector('#back')

const date = [
    {
        id: 1,
        title: "1О компании",
        text: "1Quae, itaque quaerat.Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur."
    },
    {
        id: 2,
        title: "2О компании",
        text: "2Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
        id: 3,
        title: "3О компании",
        text: "3Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
        id: 4,
        title: "4О компании",
        text: "4Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
        id: 5,
        title: "5О компании",
        text: "5Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
        id: 6,
        title: "6О компании",
        text: "6Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
];

date.forEach((element, index) => {
    const divs = document.createElement('div');
    divs.setAttribute("id", index)
    divs.classList.add('divs');
    let title = document.createElement('h2');
    let p = document.createElement('p');
    title.innerText = element.title
    p.innerText = element.text
    divs.append(title,p);
    cards.append(divs);
    click_on_divs(divs)
});
const divs = document.querySelector('.divs')
function click_on_divs(elem) {
    elem.onclick = () => {
        main_card.innerHTML = "";
        const title = document.createElement('h2');
        const paragraph = document.createElement('p');
        const h2 = elem.getElementsByTagName('h2')[0].textContent;
        const p = elem.getElementsByTagName('p')[0].textContent;
        title.innerText = h2;
        paragraph.innerText = p;
        main_card.append(title, paragraph);
    }
}
const itemWidth = 290*3;
let shiftAmount = 0;
button1.onclick = (e) => {
    if (shiftAmount === -870) {
        e.preventDefault()
        const divs = document.querySelectorAll('.divs')
        for (const iterator of divs) {
            iterator.style.transform = "scale(0.8)";
            setTimeout(() => {
                iterator.style.transform = "scale(1)";
            }, 40)
        }
    } else {
        shiftAmount -= itemWidth;
        console.log(shiftAmount);
        cards.style.transform = `translateX(${shiftAmount}px)`
    }
}
button2.onclick = (e) => {
    if (shiftAmount === 0) {
        e.preventDefault()
        const divs = document.querySelectorAll('.divs')
        for (const iterator of divs) {
            iterator.style.transform = "scale(0.8)";
            setTimeout(() => {
                 iterator.style.transform = "scale(1)";
            },40)
        }
    } else {
        shiftAmount += itemWidth;

        cards.style.transform = `translateX(${shiftAmount}px)`
    }
}
   