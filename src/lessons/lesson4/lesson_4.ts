import {inspect, log} from "util";


console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

//task 1
/*setTimeout(() => console.log(1), 0);
console.log(2);
(() => console.log(3))();
Promise.resolve(console.log(4)) */
// 2 3 4 1


//task 2
/*new Promise((res, rej) => {
    console.log(1)
})
new Promise((res, rej) => {
    setTimeout(() => console.log(2), 0)
})
Promise.resolve(setTimeout(() => console.log(3), 0))
console.log(4)
Promise.reject(console.log(5))*/
// 1 4 5 2 3

//task 3
/*(function () {
    setTimeout(() => console.log(1), 100)
})();
console.log(2)
let i = 0;
while (i < 50000000000) {
    i++;
}
new Promise((res, rej) => {
    setTimeout(() => console.log(3), 50)
})
function f() {
    console.log(4)
}
Promise.resolve(console.log(5))*/
//2 5 1 3

//task 4
/*function f(num: number) {
    console.log(num)
}
Promise.resolve(1)
    .then(f);
(function () {
    console.log(2);
})();
console.log(3);
new Promise((res, rej) => {
    console.log(4);
})
setTimeout(f, 0, 5)*/
// 2 3 4 1 5


//task 5
/*console.log(1)
function f() {
    console.log(2)
}
setTimeout(()=> {
    console.log(3)
    let p = new Promise((res, rej ) => {
        console.log(4)
        res()
    })
    p.then(() => f())
}, 0);
let i = new Promise((res, rej) => {
    console.log(5)
    rej()
});
i.then( res => console.log(res)).catch(() => console.log(6))
console.log(7)*/
// 1 5 7 6 3 4 2

//task 6
/*setTimeout(() => console.log(1), 0)
console.log(2)
new Promise((resolve, reject) => {
    setTimeout(() => reject(console.log(3)), 1000);
}).catch(() => console.log(4));
console.log(5)*/
// 2 5 1 3 4

//task 7
/*async function sleep(ms) {
    setTimeout(() => {
        console.log(ms)
    }, ms*100)
}*/

// async function sleep(ms: any) {
//     return new Promise(res => {
//         setTimeout(() => {
//             res(console.log(ms))
//         }, ms * 100)
//     })
// }
//
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
//
// show()


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type objType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const someObj: objType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError(paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`);
    },

}

export const createPromise = () => {
    someObj.promise = new Promise((res,rej) => {
        someObj.resolve = res;
        someObj.reject = rej;
    })
    someObj.promise
        .then(someObj.onSuccess)
        .catch(someObj.onError)

    //@ts-ignore
    window.obj = someObj
}

export const resolvePromise = () => {
    someObj.resolve && someObj.resolve("Success");
}

export const rejectPromise = () => {
    someObj.reject && someObj.reject("Error")
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}


// just a plug
export default () => {
};