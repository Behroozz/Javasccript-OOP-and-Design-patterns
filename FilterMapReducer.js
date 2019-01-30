//1) flatten an array 

const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], [])
// console.log(flat)

let flat2 = [].concat.apply([], nested)
// console.log(flat2)

//2) Create an object that contains the frequency of the specified key
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

const groupByAge = users.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] + 1 || 1
  return acc
}, {})

// console.log(groupByAge)

//3) Indexing an array of objects (lookup table)
const lookupTable = users.reduce((acc, curr) => {
  acc[curr.id] = curr
  return acc
}, {})

// console.log(lookupTable)


//4) Extract the unique values for the given key of each item in the array
const listOfUserGroup = [...new Set(users.map(curr => curr.group))]

//console.log(listOfUserGroup)

//5) Object key-value map reversal
const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};

//{ France: [ 'Lyon', 'Paris' ], Germany: [ 'Berlin' ] }
let countries = Object.keys(cities).reduce((acc, curr) => {
  let country = cities[curr]
  acc[country] = acc[country] || []
  acc[country].push(curr)
  return acc
}, {})

//console.log(countries)

//6) Encode an object into a query string
const params = {lat: 45, lng: 6, alt: 1000};

const queryString = Object.entries(params).map(p => 
  encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')

//console.log('queryString', queryString)

//7) Print a table of users as a readable string only with specified keys
const table = users.map(({id, name, age, group}) => `\n${id} ${name} ${age} ${group}`).join('')
console.log(table)

//8) Find and replace a key-value pair in an array of objects
//Let’s say we want to change John’s age. If you know the index, you can write this line: users[1].age = 29. However, let’s take a look at another way of doing it:
const updatedUsers = users.map(
  p => p.id !== 47 ? p : {...p, age: p.age +1}
)

console.log(updatedUsers)

//9) Union (A ∪ B) of arrays
const A = [1,2,3,4]
const B = [2,3,5,6]

const union = [... new Set([...A, ...B])];
console.log(union);

//10) Intersection (A ∩ B) of arrays
const intersection = A.filter(item => B.includes(item))
console.log(intersection)