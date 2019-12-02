const fs = require('fs');
const moduleMasses = 
	fs
	.readFileSync('input.txt', 'utf8')
	.split('\n')
	.filter(line => line)
	.map(num => parseInt(num));

const calculateFuel = mass => Math.floor(mass / 3) - 2;
const sumFuels = fuels => fuels.reduce((total, int) => total + int, 0);

const individualFuels = moduleMasses.map(moduleMass => calculateFuel(moduleMass));

const totalModuleFuelReqs = originalFuelReq => {
	var nextModuleFuelReq = calculateFuel(originalFuelReq);
	var totalModuleFuelReqs = originalFuelReq + nextModuleFuelReq;

	do {
		totalModuleFuelReqs += calculateFuel(nextModuleFuelReq);
		nextModuleFuelReq = calculateFuel(nextModuleFuelReq);
	} while(calculateFuel(nextModuleFuelReq) > 0)

	return totalModuleFuelReqs;
}

const initialTotalFuelReqs = sumFuels(individualFuels)
const finalTotalFuelReqs = individualFuels.map(fuel => totalModuleFuelReqs(fuel))

console.log('Part 1: ', initialTotalFuelReqs);
console.log('Part 2: ', sumFuels(finalTotalFuelReqs));
