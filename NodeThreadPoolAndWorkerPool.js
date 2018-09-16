// Node interview quesitions https://medium.com/@vigowebs/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

//https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

//https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

//https://nodejs.org/en/docs/guides/dont-block-the-event-loop/  

//https://nodejs.org/en/docs/guides/timers-in-node/

//https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained

//https://reactjs.org/docs/higher-order-components.html

  //Node timer: etTimeout --> setImmediate --> I/O operations --> process.nextTick
  //Infinte loop in per dealy
  // st Itnercal ---> 
  //  function intervalFun() {
  //    console.log('Cant stop me')
  //  } 
  //  setInterval(intervalFun, 5000)

  // after done: clearTimeout, clearImmediate, clearInterval

  // https://codeburst.io/basics-of-events-streams-and-pipe-in-node-js-b84578c2f1be
  // https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/


function averageAsync(numbers, callback) {
  let len = numbers.length
  console.log('averageAsync', len)

  sum = 0

  if(len === 0) {
    return 0
  }

  for(let j=0; j< len; j++) {
    calcualteSumAsync(j)
  }

  function calcualteSumAsync(i) {
    console.log('i', i)
    if(i < len) {
      setTimeout(function() {
        sum +=numbers[i]
        calcualteSumAsync(i+1)
      }, 0)
    } else {
      callback(sum /len)
    }
  }
}

let average = averageAsync([1,2,3], (result) => console.log(result))

const myPromise = new Promise((reject, resulve) => {
  setTimeout(() => resolve(result), 200) 
}).then(console.log()).catch(console.log(error))

{/* <div className='cn'>
  Content1
  </br>
  Content2
</div>


React.createElement(
  'div',
   {className: 'cn'},
   'Content1',
   React.createElement('br'),
   'Content2'
)

<Table rows: {rows} />
React.createElement(
  'Table',
  {rows: rows}
)

==>

{
  type: Table,
  props: {
    rows: rows
  }
}


props: {
  children: [
    {type: 'div'},
    {type: 'span'},
    {type: 'br'}
  ]
} */}

//HOC --> component that takes a component and return different fucntion
class App extends React.component() {
  render(){
    const ComponentWithName = withName(SomeComponent)
    return <SomeComponentWithName/>
  }
}

