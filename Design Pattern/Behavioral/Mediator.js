
//   JavaScript Design pattern: 
//   Creational - Mediator

//   Define an object that encapsulate how set of objects are interacting,
//   Take for example a page in which you enter options to make a flight reservation. 
//   A simple Mediator rule would be: you must enter a valid departure date, 
//   a valid return date, the return date must be after the departure date, 
//   a valid departure airport, a valid arrival airport, a valid number of travelers, 
//   and only then the Search button can be activated.

//   The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact.
//   To review, the advantages of the mediator are that:

//   It decouples modules by introducing an intermediary as a central point of control.It allows modules to broadcast 
//   or listen for messages without being concerned with the rest of the system. Messages can be handled by any number 
//   of modules at once.
//   It is typically significantly more easy to add or remove features to systems which are loosely coupled like this.

//   its disadvantages:    
//   By adding a mediator between modules, they must always communicate indirectly. This can cause a very minor performance 
//   drop - because of the nature of loose coupling, its difficult to establish how a system might react by only looking at
//   the broadcasts.

let Particiapant = function (name) {
  this.name = name
  this.chatroom = null
}
Particiapant.prototype = {
  send: function (message, to) {
    console.log(this)
    this.chatroom.send(message, this, to)
  },
  recieve: function (message, from) {
    console.log(from.name + ' to ' + this.name + ' : ' + message)
  }
}

let Chatroom = function () {
  let particiapants = {}
  return {
    register: function (particiapant) {
      particiapants[particiapant.name] = particiapant
      particiapant.chatroom = this
    },
    send: function (message, from, to) {
      if (to) {
        to.recieve(message, from)
      } else {
        if (key in particiapants) {
          if (particiapants[key] !== from) {
            particiapants[key].recieve(message, to)
          }
        }
      }
    }
  }
}

let Behrooz = new Particiapant("Behrooz")
let Hesam = new Particiapant("Hesam")
let chatroom = new Chatroom()
chatroom.register(Behrooz)
chatroom.register(Hesam)
chatroom.send('Hello! ', Behrooz, Hesam)



