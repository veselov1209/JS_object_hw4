//1. Task 1 Создайте объект ноутбука 

// const objNotebook = {
//     number: '3V5E7EA',
//     model: 'HP 255 G8',
//     display: {
//         type: 'IPS',
//         resolution: '1920x1080'
//     },
//     cpu: {
//         core: 8,
//         model: 'AMD Ryzen 7 5700U',
//         frequency: '1.8 - 4.3 ГГц'
//     },
//     memory: '8 ГБ',
//     hdd: 256,
//     video: 'AMD Radeon Graphics',
//     frame: {
//         color: 'silver',
//         weight: 1.7,
//         size: '358 x 242 x 19'
//     }
// }

// console.log(objNotebook);

// 2. Создайте класс который описывает создание нового пользователя с помощью логина и пароля. Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)

// class NewUser {
//     constructor(login, password){
//         this.login = login;
//         this.password = password;
//     }
// };

// const user1 = new NewUser('vasya', 'q1w2e3');
// const user2 = new NewUser('sasha', 'qwerty');
// const user3 = new NewUser('lena', '12345');

// let usersArr = [];
// usersArr.push(user1, user2, user3);

// 3. Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин.

// const map = new Map();

// // методом forEach

// usersArr.forEach(el => map.set(el.login, el));

// // циклом

// for (let i = 0; i<usersArr.length; i++){
//     map.set(usersArr[i].login, usersArr[i])
// };

// console.log(map)

// 4. Pазными способами решите вопрос соединения двух массивов без повторов

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let array2 = ["cat", "dog", true, "car", 21];

// //1)
// let arrResult = [...array1, ...array2];
// //2)
// let arrResult = array1.concat(array2);
// //3)
// array1.push(...array2);
// //4)
//array2.forEach(el => array1.push(el));
// //5)
// for (let i = 0; i<array2.length; i++){
//     array1.push(array2[i]);
// };



