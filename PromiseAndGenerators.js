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

