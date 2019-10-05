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



// Class Inheritance:
// JavaScript’s class inheritance uses the prototype chain to wire the child `Constructor.prototype` 
// to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called. 
// Those steps form single-ancestor parent/child hierarchies and create the tightest coupling available in OO design.


// Prototypal Inheritance: 
// A prototype is a working object instance. Objects inherit directly from other objects.

//Instances are typically instantiated via factory functions, object literals, or `Object.create()`.

// Inheritance is fundamentally a code reuse mechanism: A way for different kinds of objects to share code. 
// The way that you share code matters because if you get it wrong, it can create a lot of problems, specifically:

//1) The tight coupling problem
//2) The fragile base class problem
//3) Inflexible hierarchy problem
//4) The duplication by necessity problem 

// => favor object composition over class inheritance


class GuitarAmp {
  constructor( { cabinet = 'spruce', volume = '0'} ) {
    Object.assign(this, {
      cabinet, volume
    })
  }
}

class BassAmp extends GuitarAmp {
  constructor( options = {}) {
    super(options)
    this.lowCut = options.lowCut
  }
}

class ChannelStrip extends BassAmp {
  constructor(options={}) {
    super(options)
    this.inputLevel = options.inputLevel
  }
}

// BassAmp` inherits from `GuitarAmp`, and `ChannelStrip` inherits from `BassAmp` & `GuitarAmp`. This is an example of how OO design goes wrong. A channel strip isn’t actually a type of guitar amp


const cabinet = { cabinet: 'maple' }
const volume = { volume: 1 }
const lowCut = { lowCut: 1 }
const inputLevel = { inputLevel: 1 }

const GuitarAmp = (options) => {
  return Object.assign({}, cabinet, volume, options)
}

const BassAmp = (options) => {
  return Object.assign({}, cabinet, volume, lowCut, options)
}

const ChannelStrip = (options) => {
  return Object.assign({}, cabinet, volume, inputLevel)
}

// https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
// If you look carefully, you might see that we’re being much 
// more specific about which objects get which properties because
// with composition, we can. It wasn’t really an option with class 
// inheritance. When you inherit from a class, you get everything, 
// even if you don’t want it.

//prototypal OO  3 types:
// 1) Concatenative inheritance: (Mixin)
// Concatenative inheritance is the process of copying the properties 
// from one object to another, without retaining a reference between 
// the two objects by cloning and Object.assign()

const proto = {
  hello: function hello() {
    return `Hello, my name is ${ this.name }`
  }
}
const Behrooz = Object.assign({}, proto, { name: 'Behrooz' })
const msg = Behrooz.hello()

// 2) Prototype delegation
// When you try to access a property on the new object, 
// it checks the object’s own properties first. If it doesn’t 
// find it there, it checks the `[[Prototype]]`, and so on up 
// the prototype chain until it gets back to `Object.prototype`, 
// which is the root delegate for most objects.

// Method delegation can preserve memory resources because you only
// need one copy of each method to be shared by all instances

function Greeter(name) {
  this.name = name 
}

Greeter.prototype.hello = function hello() {
  return `Hello ${this.name}`
}

const Behrooz = Greeter('Behrooz')
const msg = Behrooz.hello()


// Functional Inheritance
// Functions created for the purpose of extending existing 
// objects are commonly referred to as functional mixins. 
// The primary advantage of using functions for extension is 
// that it allows you to use the function closure to encapsulate 
// private data. In other words, you can enforce private state.
 import Events from 'eventemitter3'

 const rawMixin = function() {
   const attr = {}

   return Object.assign(this, {
     set(name, value) {
      attr[name] = value

      this.emit('change', {
        prop: name,
        value: value
      })
     },

     get(name) {
       return attr[name]
     }
   }, Events.prototype)
 }

 const mixinModal = (target) => rawMixin.call(target)

 const Behrooz = { name: 'Behrooz'}
 const model = mixinModal(Behrooz)

 model.on('change', data => console.log(data))