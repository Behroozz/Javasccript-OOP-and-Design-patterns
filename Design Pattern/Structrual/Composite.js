
// JavaScript Design pattern: 
// Creational - Composite
// To treat the individual object and compostion of objects uniformly
let Node = function (name) {
  this.children = []
  this.name = name;
}

Node.prototype = {
  addChild: function (child) {
    this.children.push(child)
  },

  removeChild: function (child) {
    let removeArray = this.children.filter(item => item === child)
    this.children = removeArray
    return this.children
  },

  hadChildren: function () {
    return this.children.length > 0
  },

  getChild: function (i) {
    return this.children[i]
  }
}

function traverse(node) {
  console.log(node.name)
  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(node.getChild(i))
  }
}

let tree = new Node('Root')
let right = new Node('right')
let rightRght = new Node('rightRight')
let rightLeft = new Node('rightLeft')

let left = new Node('left')
let leftRight = new Node('leftRight')
left.addChild(leftRight)
tree.addChild(left)
tree.addChild(right)
right.addChild(rightRght)
right.addChild(rightLeft)
traverse(tree)




