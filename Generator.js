//https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

function * take(n, iter) {
  let index = 0
  for(const val of iter) {
    if(index >= n) {
      return
    }
    index = index +1
    yield val
  }
}

const result = take(3, [1,2,3,4,5,6,7,8])
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())