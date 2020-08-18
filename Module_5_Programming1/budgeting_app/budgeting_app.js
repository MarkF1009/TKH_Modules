/* Step 1 create prompts */

var name = "savings"

const weeklyIncome = parseInt(1482)
const housingCost = parseInt(1000)
console.log(weeklyIncome + housingCost)


let foodCost = parseInt(200)
let transportationCost = parseInt(32)
console.log(foodCost + transportationCost)


let otherCost = parseInt(40)
let howMuchyouwanttosaveinayear = parseInt(100)
console.log(otherCost + howMuchyouwanttosaveinayear)


/* Step 2 Run check */

var array = [1482, 52]
var sum = array.reduce(function(a,b){
  return a / b;
},0);
console.log(sum);


/* Step 3 */

var housingCost = 1000;
var foodCost = 200;
var transportationCost = 32;
var otherCost = 42;
console.log(housingCost + foodCost + transportationCost + otherCost)

var totalSum = 1274;
var weeklyIncome = 1482;
console.log(1482 - 1274)


/* Step 4 */

if(208 > 100) {
  console.log("208 is greater than 100. You are on track when it comes to saving");
} 