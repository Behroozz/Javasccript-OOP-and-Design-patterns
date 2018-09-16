// JavaScript Inheritance: 
// Prototype inheritance
//   Delegations
//   Concatenative
//   Mixin
//   Funcational
//   ES6 Class and Static

// Prototype:  
// [composition] your object contains another object called prototype 
// [delegation] Prototpye are was to compose functionality and allow object
// to delegate behavior to is's protoytype 
function Person(name) {
  this.name = name
}
Person.prototype.hello = function () {
  console.log("Hello " + this.name)
}

let Dave = new Person('Dave');
Dave.hello();
//Dave.__proto__.constructor ---> function Person()
//Dave.__proto__.constructor.constructor ---> function Object()

//protppycal Inheritance and instanceof and constructor
function Foo() { }

function Bar() {
  Foo.call(this)
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar
let bar = new Bar();
console.log(bar.constructor);

console.log(bar instanceof Bar)
console.log(bar instanceof Foo)
console.log(bar instanceof Object)

//Delegation
function Animal(name) {
  this.me = name;
}
Animal.prototype.who = function () {
  console.log('test', this)
  return "I am " + this.me
}

Animal.prototype.speak = function () {
  return console.log("(Animal) speak!")
}

function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = () => {
  Animal.prototype.speak.call(this)
}

let fluffy = new Dog('Fluffy')
let spot = new Dog('Spot')

fluffy.speak()
spot.speak()
console.log(fluffy.who())
console.log(spot.who())

//Concatenative
let Animal2 = {
  who: function () { return this.dogName },
  speak: function (s) { console.log(this.who() + ':' + s) }
}

let Dog2 = Object.create(Animal, {
  bark: {
    value: function () { this.speak("Woof!") }
  }
})

let spot2 = Object.assign(Object.create(Dog), { dogName: 'Spot' })
spot2.bark;

//Mixin
let Person2 = {
  who: function () { return this.humanName },
  init: function (humanName) {
    this.humanName = humanName;
  }
}

let canSpeak = {
  speak: function (s) { console.log(this.who() + " : " + s) }
}

let bob = Object.assign(Object.create(Person2), canSpeak)
bob.init('Bob')
bob.speak('Hi there!')

//Functional Inheritance
let vehicle = function (attrs) {
  //Private
  let privateObj = {
    hasEngine: true
  },
    that = {};
  //Public
  that.name = attrs.name || null
  that.hasEngine = () => {
    console.log(that.name + " has an engine " + privateObj.hasEngine)
  }

  return that;
}

let motorBike = () => {
  //Private
  let privateObj = {
    numWheel: 2
  }
  // inherit
  that = vehicle({
    name: 'motorbike'
  })

  that.totalNumWheels = () => {
    console.log('motorbike have ' + privateObj.numWheel + ' wheels')
  }

  return that
}

myMotorBike = motorBike();
myMotorBike.hasEngine();
myMotorBike.totalNumWheels();

//ES6 classes and static method
class Animal3 {
  eat() {
    console.log('food')
  }
  static getAnimalProperties() {
    console.log('They are alive and eat')
  }
}

class Cat extends Animal3 {
  eat() {
    super.eat()
    console.log('eat cat food')
  }
  static getAnimalProperties() {
    super.getAnimalProperties();
    console.log('They have 4 foot')
  }
}

let myAnimal = new Animal3();
myAnimal.eat();
Animal3.getAnimalProperties()

let myCat = new Cat();
myCat.eat();
Cat.getAnimalProperties()
