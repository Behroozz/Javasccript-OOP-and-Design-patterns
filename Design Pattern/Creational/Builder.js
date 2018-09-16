
// JavaScript Design pattern: 
// Creational - Builder
// Seperate construction of a complex object from its representation
// so the same constructor can be use for different represtantion.

function Car() {
  this.doors = 0
  this.setNumOfDoor = () => {
    this.doors = 4
  }
  this.getNumOfDoor = () => {
    return this.doors
  }
  this.describe = () => {
    console.log('I am Car')
  }
}

function Truck() {
  this.doors = 0
  this.setNumOfDoor = () => {
    this.doors = 2
  }
  this.getNumOfDoor = () => {
    return this.door
  }
  this.describe = () => {
    console.log('I am Truck')
  }
}

function CarBuilder() {
  this.car = null
  this.step1 = () => {
    this.car = new Car()
  }
  this.step2 = () => {
    this.car.setNumOfDoor()
  }
  this.get = () => {
    return this.car
  }
}

function TruckBuilder() {
  this.truck = null
  this.step1 = () => {
    this.truck = new Truck()
  }
  this.step2 = () => {
    this.truck.setNumOfDoor()
  }
  this.get = () => {
    return this.truck
  }
}

function vehicleBuilder() {
  this.construct = (builder) => {
    builder.step1()
    builder.step2()
    return builder.get()
  }
}

let myVehicleBuilder = new vehicleBuilder()

let myCarBuilder = new CarBuilder()
let myTruckBuilder = new TruckBuilder()

let myCar = myVehicleBuilder.construct(myCarBuilder)
let myTruck = myVehicleBuilder.construct(myTruckBuilder)

console.log(myCar)
console.log(myTruck)




