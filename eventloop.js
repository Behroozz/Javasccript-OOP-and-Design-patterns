// https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4
// How is JavaScript asynchronous and single-threaded 


// 1) Heap - Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory
// 2) Stack - This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames 
// (more on this below)
// 3) Browser or Web APIs are built into your web browser, and are able to expose data from the browser and surrounding computer 
// environment and do useful complex things with it


function main(){
  console.log('A');
  setTimeout(
    function display(){ console.log('B'); }
  ,0);
	console.log('C');
}
main();
//	Output
//	A
//	C
//  B
