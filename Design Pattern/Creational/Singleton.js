// JavaScript Design pattern: 
// Creational - Singleton
// Ensure class only have one instance of global object
let Singleton = (function () {
  let singletonInstance
  function createInstance() {
    let myObject = new Object('I am the instance');
    return myObject
  }

  return {
    getInstance: function () {
      if (!singletonInstance) {
        singletonInstance = createInstance()
      }
      return singletonInstance
    }
  }
})()

let instance1 = Singleton.getInstance()
let instance2 = Singleton.getInstance()

if (instance1 === instance2) {
  console.log('They are the same')
}


