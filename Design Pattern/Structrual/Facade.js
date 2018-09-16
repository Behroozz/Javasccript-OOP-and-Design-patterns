// JavaScript Design pattern: 
// Creational - Facade
// Unified interface for set of interfaces
let morgage = function (name) {
  this.name = name
}
morgage.prototype = {
  verify: function (amount) {
    let result = []
    if (new BankCheck().verify(this.name)) {
      result.push('Bank verified')
    }
    if (new BackgroundCheck().verify(this.name, amount)) {
      result.push('Background check is passed')
    }
    return result
  }
}
let BankCheck = function () {
  this.verify = function (name, amount) {
    return true
  }
}

let BackgroundCheck = function () {
  this.verify = function (name) {
    return true
  }
}

let morgageVerification = new morgage().verify('Behrooz', 10)
console.log(morgageVerification)



