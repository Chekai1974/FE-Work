// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
const numbers = [1,2,3,4,5]
let result = numbers.reduce((acc,cur)=>`${acc},${cur}`)
console.log('"'+result+'"');

// 2)Используя метод reduce, посчитайте сколько людей проголосовали.
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
let res=0;
let value = voters.reduce((acc, cur)=>{
    if (cur.voted) {
        return ++acc
    }else {
        return acc
    }
},0)
console.log(value);
// let res2=0
// for (let i = 0; i < voters.length; i++) {
//     if (voters[i].voted===true) {
//         res2++
//     }
// }
// console.log(res2);

// let vot = voters.forEach((e)=> e.voted===true? res2++: res)
// console.log(res2);


// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let allPrice = wishlist.reduce((acc, cur)=>{
    return acc + cur.price
},0)
console.log(allPrice);

// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, 
// где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, 
// где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.

const customersAndOrders = [
    {name:"Mark", orders:["Apple","Sup","Water"]},
    {name:"Roza", orders:["Orange","Mirror",]},
    {name:"Dima", orders:["Mobile","Spoon","Wine"]},
    {name:"Natasha", orders:["Shampoo","Toy","Coca-Cola","Bear"]},
]
customersAndOrders.forEach((elem)=>{
    elem.totalOrders = elem.orders.length
    delete elem.orders
})
console.log(customersAndOrders);

//5) Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
const adults = [
    {name:"Mark",age:18},
    {name:"Dima",age:12},
    {name:"Danya",age:3},
    {name:"Roza",age:22},
    {name:"Koly",age:33},
]
let isAdults = adults.filter((a)=> a.age>=18)
let noAdults = adults.filter((a)=> a.age<18)
console.log(`isAdults: ${isAdults.length} noAdults:${noAdults.length}`);

//6) Создайте массив объектов со свойствами 'name' и 'age'.Используя методы массива, создайте новый массив,
// содержащий только те объекты, возраст которых больше 30 лет.

let ageMoreThen30 = adults.filter((more) => more.age > 30)
console.log(ageMoreThen30);
