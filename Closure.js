// a closure gives you access to an outer function’s scope from an inner function.
// lexical scope
// Among other things, closures are commonly used to give objects 
// data privacy. Data privacy is an essential property that helps 
// us program to an interface, not an implementation

// You can’t get at the data from an outside scope except through the object’s privileged methods

// A closure is an inner function that has access to the outer 
// (enclosing) function’s variables — scope chain. The closure has
//  three scope chains: it has access to its own scope (variables 
// defined between its curly brackets), it has access to the outer 
// function’s variables, and it has access to the global variables.


// data privacy
const getSecret = (secret) => {
  return {
    get: () => secret
  }
}

const obj = getSecret(1)
const secret = obj.get()

// stateful function
// Closures can also be used to create stateful functions whose return values may be influenced by their internal state, e.g.

// In functional programming, closures are frequently used for partial application & currying
// partial function:
const partialApply = (fn, ...fixedArgs) => {
  return function(...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs))
  }
}

const add = (a,b) => a + b
const add10 = partialApply(add, 10)
add10(5)

