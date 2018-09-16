
// JavaScript Design pattern: 
// Creational - Module
let basketModule = (function () {
  let basket = []
  return {
    addItem: function (item) {
      basket.push(item)
    },
    getItemCount: function (item) {
      return basket.length
    }
  }
})()
basketModule.addItem({ name: 'A' })
basketModule.addItem({ name: 'B' })
console.log(basketModule.getItemCount())



