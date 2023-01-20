const button = document.createElement('button')
let p = document.createElement('p')
p.innerText = "Random Photo"
button.append(p)



const container = document.createElement('div')
container.className = "container"



const content = document.createElement('div')
content.className = "content"



const div1 = document.createElement('div')
div1.className = 'big'



const imgMain = document.createElement('img')
imgMain.setAttribute('src', "https://i.pinimg.com/564x/41/52/02/41520209748d7733fca133b0a54ffa75.jpg")
imgMain.style.cursor = 'not-allowed'


let random = [
    "https://i.pinimg.com/564x/34/e3/2b/34e32b62695508f84462ece829382cee.jpg",
    "https://i.pinimg.com/564x/92/f2/6d/92f26d8331ccef9747436bfb045af4b1.jpg",
    "https://i.pinimg.com/564x/97/65/5d/97655d106c56ca4c31a873bc9c9aabe3.jpg",
    "https://i.pinimg.com/564x/27/23/33/272333d9781de54ea270bc32ba98739b.jpg",
    "https://i.pinimg.com/564x/70/96/12/709612c9d3f673c7e1865049e0e9f12f.jpg",
    "https://i.pinimg.com/564x/f8/2d/8a/f82d8ae253eef1c292bc3bbe0f0f248d.jpg",
    "https://i.pinimg.com/564x/7c/92/00/7c9200f49a36f366b42c731ab4c548b5.jpg",
    "https://i.pinimg.com/564x/eb/42/80/eb42808abfa9569ffbf0d2b23008e874.jpg",
    "https://i.pinimg.com/564x/8d/f4/bc/8df4bcb4561bc47fb9c5fbdff6effb48.jpg",
    "https://i.pinimg.com/564x/38/67/3a/38673a4e2f1dee8a5b624227e71aeaeb.jpg",
    "https://i.pinimg.com/564x/04/cd/92/04cd92e85f0ae39205fc160ef13b1546.jpg",
    "https://i.pinimg.com/564x/73/a7/d5/73a7d5a01f604a561cd0f77069c930c6.jpg",
    "https://i.pinimg.com/564x/fa/d3/56/fad35623123ad6c46a690d5c47d49975.jpg",
    "https://i.pinimg.com/736x/4e/e9/b8/4ee9b89321ca70d2fc72a5a9acbc946b.jpg",
    "https://i.pinimg.com/564x/0a/01/7b/0a017bbd6d30f29429d19d27dd91715b.jpg",
    "https://i.pinimg.com/564x/bb/bf/5b/bbbf5b615411d90aba613f142c0beb83.jpg",
    "https://i.pinimg.com/564x/4c/18/70/4c1870d9a7822aebfbe762ae1f12f482.jpg",
    "https://i.pinimg.com/564x/76/cb/58/76cb58eb25a5f53fb25a3ac2e37116da.jpg",
    "https://i.pinimg.com/736x/ad/f5/8a/adf58a8b185aff312d1c214c3d01bce7.jpg",
    "https://i.pinimg.com/564x/04/9a/11/049a11cf20da33d73c488722de6e8285.jpg",
    "https://i.pinimg.com/564x/19/c1/07/19c107600f68f6a5428a6507cb9f2221.jpg",
]
button.onclick = () => {
    let num = Math.floor(Math.random() * random.length)
    let res = num
    let randomSrc = random[res]
    imgMain.setAttribute('src', randomSrc)
    console.log(randomSrc);
}
div1.append(imgMain,button)

let arr = [
    'https://i.pinimg.com/564x/8c/a2/df/8ca2df0e99e68dd8b19f141c3dba158a.jpg',
    'https://i.pinimg.com/736x/b5/a3/d0/b5a3d01857ab26880134bec13b8c00d1.jpg',
    'https://i.pinimg.com/564x/30/10/85/3010857c987138323741d5d957ab6a8a.jpg',
    'https://i.pinimg.com/564x/83/f9/b6/83f9b67571904611242e78acc62d70a0.jpg'
]

const div2 = document.createElement('div')
div2.className = 'small'

for (let i = 0; i < arr.length; i++) {
    let divSmall = document.createElement('div')

    let imgs = document.createElement('img')
    imgs.setAttribute('src', arr[i])
    imgs.className="small"
    imgs.style.width = "300px"
    imgs.style.cursor = "pointer"

    imgs.onclick = () => {
        let val = imgMain.src
        imgMain.src = imgs.src
        imgs.src = val
    }

    divSmall.append(imgs)
    div2.append(divSmall)
}




content.append(div1, div2)
container.append(content)
document.body.append(container)