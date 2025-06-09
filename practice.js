//console.log('welcome');

// functions like setTimeout are example of callback function which allow asynchronous things in JS even though JS is synchronous.

// function attachEventListners(){
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button Clicked", ++count)
// })
// }
// attachEventListners();

//15
// Event Loop
console.log("Start");

setTimeout(function cb() {
    console.log("callBack");
}, 5000);

console.log("End");

//Event Loop and Callback Queue

