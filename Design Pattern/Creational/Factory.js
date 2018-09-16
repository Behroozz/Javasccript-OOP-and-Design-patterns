// JavaScript Design pattern: 
// Creational - Factory
// Let subclass decide which class to instantiate
function Factory() {
  let employee;
  this.createEmployee = function (type) {
    if (type === 'fullTime') {
      employee = new fullTime()
    } else if (type === 'partTime') {
      employee = new partTime()
    }
    employee.type = type
    return employee
  }
}
let fullTime = function () {
  this.hourly = '10$'
}
let partTime = function () {
  this.hourly = '5$'
}

let Brian = new Factory().createEmployee('fullTime')
console.log(Brian)





