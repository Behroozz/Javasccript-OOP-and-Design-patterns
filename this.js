//This******************

// in either call, apply and bind first parameter set the value of this
// call and apply invoke immediatly
// bind will wait for the event to get called ex. onClick, bind will return new function
// call accept args and apply accept array


// https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp

// Explicit binding
const person1 = {name: 'Bruce'}
const person2 = {name: 'Alice'}

const sayHello = function(age, job) {
  return 'Hi ' +' '+this.name +' '+ age +' '+ job
}

console.log(sayHello.call(person1, 32, 'sf'))
console.log(sayHello.apply(person2, [28, 'nrs']))

const bindedPerson = sayHello.bind(person1)
console.log(bindedPerson('32', 'sf'))
console.log(bindedPerson)

//Implicit binding
// What ever is immediatly on its left

let Robot = function(name, iq){
  return {
    name: name,
    iq: iq,
    howSmart: function() { 
      return this.iq
    },
    creator: {
      iq: 120,
      howSmart: function() {
        return this.iq
      }
    }
  }
}

let iRobot = Robot('iRobot', 160)
const myRobot = iRobot.howSmart()
console.log('iRobot '+ myRobot)
const Bruce= iRobot.creator.howSmart()
console.log('Bruce '+ Bruce)

//new
function RobotBuilder(ram, memory) {
  this.ram = ram,
  this.memory = memory
}

const newRobot = new RobotBuilder(12, 50)
console.log(newRobot)