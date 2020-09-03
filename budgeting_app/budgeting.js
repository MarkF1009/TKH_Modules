const name = "Savings";
const weeklyIncome = parseInt(prompt("weeklyIncome:"));
const foodCost = parseInt(prompt("foodCost"));
const housingCost = parseInt(prompt("housingCost"));
const transportationCosts = parseInt(prompt("transportationCosts"));
const otherCost = parseInt(prompt("otherCost"));
const wantedSavings = parseInt(prompt("wantedSavings"));

const weeklySavings = wantedSavings/52;

const totalWkCosts =  foodCost + housingCost + transportationCosts + otherCost;

const totalWkProfit = weeklyIncome - totalWkCosts;

if (totalWkProfit >= weeklySavings) {
	console.log("You are on track with Savings!");
} else {
	const extraSav = wantedSavings - totalWkProfit;
	console.log(`You must save this amount:${extraSav}`);
}
	