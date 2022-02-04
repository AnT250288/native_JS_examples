console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


/*let prom = new Promise((resolve, reject) => {
    // Симулируем запрос
    setTimeout((response) => {
        if (response.HTTPStatus >= 200 && response.HTTPStatus < 400) {
            resolve(response.body.data)
        } else {
            reject(response.error)
        }
    }, 200, {HTTPStatus: 200, body: {data: "success"}, error: ''})
})

prom
    .then((res: any) => {
        console.log(res);
        return 2;
    })
    .then((res2: any) => {
        console.log(res2)
    })*/

/*let userDataProm = new Promise((resolve, reject) => {
    // Симулируем запрос
    setTimeout((response) => {
        if (response.HTTPStatus >= 200 && response.HTTPStatus < 400) {
            resolve(response.body.access_token)
        } else {
            reject(response.error)
        }
    }, 1000, {HTTPStatus: 200, body: {access_token: "fasfkaflasfhu3123hhhjhj"}, error: ''})
})

console.log(userDataProm)

userDataProm
    .then((token) => {
        console.log(token)
        // www.google.com/it-incubator/courses/2?access_token=token
        return new Promise((res, rej) => {
            setTimeout((response) => {
                if (response.HTTPStatus >= 200 && response.HTTPStatus < 400) {
                    res({body: response.body, token})
                } else {
                    rej(response.error)
                }
            }, 1000, {HTTPStatus: 200, body: {courseName: "Promise", videoLink: "someUrl"}, error: ""})
        })
    })
    .then(res => {
        console.log(res);
    })*/


/*let userDataProm = new Promise((resolve, reject) => {
    // Симулируем запрос
    setTimeout((response) => {
        if (response.HTTPStatus >= 200 && response.HTTPStatus < 400) {
            resolve(response.body.access_token)
        } else {
            reject(response.error)
        }
    }, 1000, {HTTPStatus: 404, body: {}, error: 'Bad request'})
})

console.log(userDataProm)

userDataProm
    .then((token) => {
        console.log(token)
        // www.google.com/it-incubator/courses/2?access_token=token
        return new Promise((res, rej) => {
            setTimeout((response) => {
                if (response.HTTPStatus >= 200 && response.HTTPStatus < 400) {
                    res({body: response.body, token})
                } else {
                    rej(response.error)
                }
            }, 1000, {HTTPStatus: 200, body: {courseName: "Promise", videoLink: "someUrl"}, error: ""})
        })
    }, err => {
        console.log('err', err);
        return {HTTPStatus: 200, body: {courseName: "Intro", videoLink: "someUrl"}, error: ""}

    })
    .then(res => {
        console.log(res);
    })*/

/*let prom = new Promise((res, reg) => {
    res();
})

prom
    .then(res => {
        throw 0;
    }, err => {
        console.log('err', err)
    })
    .then(res => {
    }, err2 => {
        console.log("err2", err2)
    })
    .then(res => {
        console.log("res3", res)
    })*/

/*let prom = new Promise((res, rej) => {
    rej(500);
})

prom
    .then(res => {
        throw 0;
    }, err => {
        console.log('err', err)
        throw 1000
    })
    .then(res => {
    }, err2 => {
        console.log("err2", err2)
    })
    .then(res => {
        console.log("res3", res)
    })*/

/*let prom = new Promise((res, rej) => {
    rej(500);
})

prom
    .then(res => {
        throw 0;
    })
    .then(res => {
    })
    .then(res => {
        console.log("res3", res)
    }, err3 => {
        console.log("err3", err3)
    })*/

/*Promise.resolve(1).then(console.log)
Promise.reject(0).then(console.log, console.log)*/


/*Promise.resolve(10)
    .then(res => {
        console.log("res", res);
        return res * 2;
    })
    .catch(err => {
        console.log("err", err)
        return "Hello World"
    })
    .then(res => {
        console.log("res", res);
        return res * 2;
    })
    .catch(err => {
        console.log("err", err)
        return "Hello World"
    })
    .then(res => {
        console.log("res", res);
        throw 0
    })
    .catch(err => {
        console.log("err", err)
        return "Hello World"
    })
    .then(console.log)*/

/*
Promise.resolve(10)
    .finally(() => {
        throw 500
    })
    .then(res => {
        console.log("res", res);
        return res * 2;
    })
    .then(res => {
        console.log("res", res);
        throw 0
    })
    .catch(err => {
        console.log("err", err)
        return "Hello World"
    })
*/

/*Promise.resolve(10)
    .then(res => {
        console.log("res", res);
        return res * 2;
    })
    .finally(() => {
        throw 500
    })
    .then(res => {
        console.log("res", res);
        throw 0
    })
    .catch(err => {
        console.log("err", err)
        return "Hello World"
    })*/


/*console.log("start")
Promise.resolve(10).then(console.log).then(console.log)
setInterval(console.log, 1000, "yo")
Promise.resolve(0).catch(console.log).then(console.log)
let i = 0;
while (i < 500000000) {
    i++
}
console.log("end")*/


//const func = async () => {
/*async function f() {
    const responce = await someRequest()
}*/


/*async function f() {
    console.log("start function code")
    console.log("end function code")
}

console.log("start")
f().then(() => {
    console.log("Promise")
});
console.log("end")*/


/*async function f() {
    console.log("start function code")
    const response = await new Promise(res => {
        setTimeout(() => {
            res("await response")
        }, 1000)
    })
    console.log("response", response)
    console.log("end function code")
}

console.log("start")
f().then(() => {
    console.log("Promise")
});
console.log("end")*/

/*
async function f() {
    try {
        console.log("start function code")
        const response = await new Promise((res, rej) => {
            setTimeout(() => {
                rej("Rejected")
            }, 1000)
        })
        console.log("response", response)
        console.log("end function code")
    } catch (e) {
        console.log("e", e)
    }
}

console.log("start")
f().then(() => {
    console.log("Promise")
})
/!*.catch(err => {
    console.log("err", err)
})*!/
console.log("end")
*/


/*async function f() {
    console.log("start function code")
    const response = Promise.resolve("Yo")
    console.log("response", response)
    console.log("end function code")
}

console.log("start")
f().then(() => {
    console.log("Promise")
})
console.log("end")*/




// setTimeout(console.log, 1000, 5000)
// just a plug
export default () => {
};