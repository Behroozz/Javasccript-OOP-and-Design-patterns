//https://codeburst.io/understanding-javascript-proxies-by-examining-on-change-library-f252eddf76c2


const originalObect = {firstName: 'Behrooz', lastName: 'Tabesh'}

const handler = {
  get(target, property, receiver) {
    console.log(`GET ${property}`)
    if(property in target) {
      return target[property]
    }
    return `Oops not property`
    
  }
}

const proxiedObject = new Proxy(originalObect, handler)

console.log(proxiedObject.firstName)
console.log(proxiedObject.job)


const onChange = (objToWatch, onChangeFunction) => {
  const handler = {
    get(target, property, receiver) {
      onChangeFunction('get')
      return Reflect.get(target, property, receiver)
    },
    set(target, property, receiver) {
      onChangeFunction('set')
      return Reflect.set(target, property, receiver)
    },
    deleteProperty(target, property) {
      onChangeFunction('delete')
      return Reflect.deleteProperty(target, property)
    }
  }

  return new Proxy(objToWatch, handler)
}

const logger = (action) => console.log('I was called for ' + action)

const obj = {a :'a'}

const proxy = onChange(obj, logger)

console.log(proxy.a)
proxy.b = 'b'
delete proxy.a

