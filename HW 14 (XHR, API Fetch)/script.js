// Level 1
// Используя ресурс json placeholder получите всех юзеров и отправьте в консоль только
// 1) username-ы отсортированный по алфавиту
// 2) Количество постов каждого из юзеров в параметре: post_count
// Для получения всех юзеров: https://jsonplaceholder.typicode.com/users
// Для получения всех постов: https://jsonplaceholder.typicode.com/posts

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resonse) => resonse.json())
//   .then((jsonObjs) => {
//     let data = jsonObjs;
//     let sort = data.map((users) => users.username).sort();
//     console.log(sort);
//   })
//   .catch((error) => console.error(error));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resonse) => resonse.json())
//     .then((json) => {
//         let date = json;
//         let countPost = date.reduce((acc, cur) => {
//           const userId = cur.userId;
//           acc[userId] = (acc[userId] || 0) + 1;
//           return acc;
//         })
//     console.log(countPost);
//   })
//     .catch((error) => console.error(error));


// Level2
// Выведите всю информацию в виде таблицы на экран и предоставьте
// функции сортировки по каждой из двух колонок:
// а) username (default sort by alphabetical)
// b) post_count
// Название функций, названия переменных, названия самих колонок в HTML выберите так,
// чтобы было понятно что они из себя представляют!
// НЕ СМОГ СОРТИРОВКУ ДОБАВИТЬ!

let tbody = document.getElementById("userTableBody");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resonse) => resonse.json())
  .then((jsonObjs) => {
    let data = jsonObjs;
    let sort = data.map((users) => users.username).sort();
      
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resonse) => resonse.json())
      .then((json) => {
        let date = json;
        let countPost = date.reduce((acc, cur) => {
          const userId = cur.userId;
          acc[userId] = (acc[userId] || 0) + 1;
          return acc;
        })
        function user() {
        for (let i = 0; i < sort.length; i++) {
          let trTbody = document.createElement('tr')
          let tdTbody = document.createElement('td')
          let tdTBodePost = document.createElement('td')
          tdTbody.innerText = sort[i];
          tdTBodePost.innerText = countPost[i + 1] || 0;
          trTbody.append(tdTbody,tdTBodePost);
          tbody.append(trTbody);
        }
      }
      user()
      }).catch((error) => console.error(error));
    
  })
    .catch((error) => console.error(error));
    

// 3.1. Создайте страницу, которая отображает ID, City, Country
// полученные из запроса по ссылке: https://random-data-api.com/api/address/random_address
// Создайте функцию, которая каждые полторы секунды проверяет - если в ответе на GET запрос
// поменялся  ID, то вызываем другую функцию, цель которой получить новые данные и обновить HTML,
// а если данные не изменились - ничего не делаем.

const div = document.querySelector('.level2')
let currentID = null;
function getInfo() {
  fetch('https://random-data-api.com/api/address/random_address')
    .then((response) => response.json())
    .then((json) => {
      document.querySelector('.level2')
      document.querySelector('#id').innerText = json.id
      document.querySelector('#city').innerText = json.city
      document.querySelector('#country').innerText = json.country
      
      if (currentID === null || currentID !== json.id) {
        currentID = json.id
        updateHTML()
      }
  }).catch(error => console.error(error));
}
function updateHTML() {
    getInfo()
}
setTimeout(getInfo(), 2500);



// Выполните GET запрос на ресурс: https://api.twitter.com/1.1/statuses/update.json
// Обработайте все возможные ошибки, а в случае именно этой: Введите в консоль русскими
// буквами и словами сообщение о том, что именно произошло ?

fetch('https://api.twitter.com/1.1/statuses/update.json')
  .then(response => {
    if (!response.ok) {
       throw new Error('Произошла ошибка при выполнении запроса. Статус ошибки: ' + response.status)
    }
    return response.json();
  }).then(json => console.log(json)).catch(error => {
      if (error.message === "Failed to fetch") {
        console.error(`Произошла ошибка при выполнении запроса. Неверные данные аутентификации.`);
      }else {
        console.error(error.message);
      }
  })
 