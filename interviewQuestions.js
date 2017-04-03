//Stupid shit fucknut interviewers will hip-check you on

console.log(thing); //returns 'thing is not defined'

var thing;

console.log(thing); //returns 'undefined'

if (function () {
  }) {
  //this will check eval(function(){}) and return true
}

//self invoking function
(function () {
  // some code…
})();

//closure
// (function outerFunc (arg) {
//     var outerVar = 0; // only innerFunc can fuck with me
//     (function innerFunc (arg) {
//         // var innerVar = "no one can fuck with me";
//     });
// });

//passing args to inner functions
function mul(x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4)); //returns 2x3x4 = 24

//4 ways to empty an array
array.splice(0, array.length); //1
array = []; //2
array.length = 0; //3
while (array.length) { //4
  array.pop();
}

//delete ONLY works on object props
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log(output); // 0

//boolean patterns
var bar = true;
console.log(bar + 0); // returns 1
console.log(bar + "xyz"); // returns truexyz
console.log(bar + true); // returns 2
console.log(bar + false); // returns 1

//shit goes right to left
var z = 1,
  y = z = typeof y;
console.log(y);  //returns undefined

//can't see stuff
var foo = function bar() {
  // foo = obj
  // bar = function
  console.log(typeof bar()); // Work here :)
};
// foo = obj
// bar is undefined here


//A cunt's favorite question

// console.log('salary?' + salary); //salary is not defined
(function () {
var salary = null;
console.log('salary is a thing' + salary); //salary = null

var salary = "1000$";
  
  (function () {
    console.log("Original salary was " + salary); // salary is undefined
    
    var salary = "5000$"; //this cunt get's hoisted but only is declaration (salary exists, but is undefined)
    
    console.log("My New Salary " + salary); //salary defined now -> returns $5000
  })();
})();
