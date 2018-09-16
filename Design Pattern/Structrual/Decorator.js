
// JavaScript Design pattern: 
// Creational - Decorator
// Add aditional functionality to an object dynamically.

// An example of a decorator is security management where business objects are 
// given additional access to privileged information depending on the privileges of 
// the authenticated user. For example, an HR manager gets to work with 
// an employee object that has appended (i.e. is decorated with) the employee's 
// salary record so that salary information can be viewed.  

// alternative in Javscript is extend and mixin.
let user = function (name) {
  this.name = name
  this.describe = function () {
    console.log('name   ' + this.name)
  }
}

let decoratedUser = function (user, salary) {
  this.salary = salary
  this.name = user.name
  this.user = user

  this.describe = function () {
    console.log('salary   ' + this.salary + '   name   ' + this.name)
  }
}

let Behrooz = new user('Behrooz');
let decortatedBehrooz = new decoratedUser(Behrooz, 10)

Behrooz.describe()
decortatedBehrooz.describe()




