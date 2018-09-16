https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch

function createObjectFunction() {
  console.log('inside createObjectFunction: ', this.foo)
  return {
    foo: 40,
    bar : function() {
      console.log('inside bar: ' , this.foo)
    }
  }
}

function createObjectArrow() {
  console.log('insiide createObjectArrow: ', this.foo)
  return {
    foo: 40,
    bar: () => {
      console.log('inside bar: ', this.foo)
    }
  }
}

const withFunction = createObjectFunction.call({foo: 20})
withFunction.bar()
const withArrowFunction = createObjectArrow.call({foo: 20})
withArrowFunction.bar()