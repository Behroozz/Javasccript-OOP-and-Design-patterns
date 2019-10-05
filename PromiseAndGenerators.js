function* Range(start, end, step) {
  while(start < end) {
    yield start
    start +=step
  }
}

// for(let i of Range(0,10,2)){
//   console.log(i)
// }

let fibonacci = function* (numbers) {
  let pre=0, cur=1
  while(numbers-- > 0) {
    [pre, cur] = [cur, pre+cur]
    yield cur
  }
}

// for(let n of fibonacci(1000)){
//   console.log(n)
// }

// let numbers = [ ...fibonacci(1000) ]
// console.log(numbers)

function msgAfterTimeout (msg, who, timeout) {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
  })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
  msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
  console.log(`done after 300ms:${msg}`)
})

//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// promise
// A promise is an object that may produce a single value 
// some time in the future: either a resolved value, or a 
// reason that it’s not resolved (e.g., a network error occurred). 
// A promise may be in one of 3 possible states: fulfilled, rejected,
// or pending. Promise users can attach callbacks to handle the 
// fulfilled value or the reason for rejection.

// promise.then(
//   onFulfilled?: Function,
//   onRejected?: Function
// ) => Promise


//Because .then() always returns a new promise, it’s possible to 
// chain promises with precise control over how and where errors 
// are handled. Promises allow you to mimic normal synchronous 
// code’s try/catch behavior.

// fetch(url)
//   .then(process)
//   .then(save)
//   .catch(handleErrors)
// ;


// Difference between callback and promises
// As explained above, promises are cleaner way for running 
// asynchronous tasks to look more like synchronous and also 
// provide catching mechanism which are not in callbacks. 
// Promises are built over callbacks. Promises are a very mighty 
// abstraction, allow cleaner and better, functional code with 
// less error-prone boilerplate. I would recommend to get the 
// flow of how stuff works and think in terms of promises way.
