//https://www.sitepoint.com/javascript-design-patterns-observer-pattern/
// https://www.datchley.name/es6-eventemitter/

class ObserverPattern {
  constructor() {
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(item => item !== observer)
  }

  broadcase(data) {
    this.observers.forEach((subscriber) => subscriber(data))
  }
}



let op = new ObserverPattern()
op.subscribe({name: 'Behrooz'})
op.subscribe({name: 'Hesam'})

op.notifyAll()

