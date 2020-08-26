const weeklyIncome = parseInt(prompt("What is your weekly income?:"));

const foodCost = parseInt(prompt("How much is your food cost?:"));
const housingCost = parseInt(prompt("How much is your housing cost?: "));
const transportationCost = parseInt(prompt("How much is your weekly transportation cost?:"));
const otherCost = parseInt(prompt("How much is your other costs?:"));

const yearSavings = parseInt(prompt("How much would you like to save in a year?:"));

const desiredWeeklySavings = yearSavings / 52;
const totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost;

//const year revenue and weekly cost * 52;
const actualWeeklySavings = weeklyIncome - totalWeeklyCost;

let needToSave = desiredWeeklySavings - actualWeeklySavings;

if(actualWeeklySavings > desiredWeeklySavings){
  console.log("You are on track");
} else {
  console.log("You falling short, you need to save money and in a week you will be back on track");
}