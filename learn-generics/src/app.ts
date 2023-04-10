// const names: Array<string> = [];
// names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve(10)
//     },2000)
// })
// promise.then(data => {
//     data.split(' ')
// })

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

// console.log(merge({name: 'Max'},{age: 30}))
const megedObj = merge({name: 'Max'},{age: 30})