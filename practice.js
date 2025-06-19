//console.log('welcome');

// functions like setTimeout are example of callback function which allow asynchronous things in JS even though JS is synchronous.

// function attachEventListners(){
//     let count = 0;
//    document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button Clicked", ++count)
// })
// }
// attachEventListners();

//15
// Event Loop
// console.log("Start");

// setTimeout(function cb() {
//     console.log("callBack");
// }, 5000);

// console.log("End");

//Event Loop and Callback Queue

//16
//JS Engine
//First JS Engine was SpirderMonkey
//Code -> Parsing -> Compilation -> Execution

//17
// const radius = [3,1,2,4];

// const area = function(radius) {     //Callback Function
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius) {
//     return 2 * Math.PI * radius;
// }

// const diameter = function(radius) {
//     return 2 * radius;
// }

// Array.prototype.calculate = function(logic) {}
// const calculate = function(radius, logic) {  //Higher Order Function
//     const output = [];
//     for(let i = 0 ; i < radius.length ; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

//console.log(radius.map(area));
//console.log(radius.calculate(area));

