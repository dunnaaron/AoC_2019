const instList1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72'];
const instList2 = ['U62','R66','U55','R34','D71','R55','D58','R83'];

const calcCoords = instList => {
	var coords = [[0,0]];

	instList.forEach(x => {
		coords.push(evalInst(x, coords));
	});

	return coords;
};

const evalInst = (inst, coords) => {
	const lastCoord = coords[coords.length - 1];
	const direction = parseInstruction(inst)[0];
	const distance = parseInt(parseInstruction(inst)[1]);

	if(direction == 'R') {
		return [lastCoord[0] + distance, lastCoord[1]];
	}
	if(direction == 'L') {
		return [lastCoord[0] - distance, lastCoord[1]];
	}
	if(direction == 'U') {
		return [lastCoord[0], lastCoord[1] + distance];
	}
	if(direction == 'D') {
		return [lastCoord[0], lastCoord[1] - distance];
	}
};

const parseInstruction = inst => {
	return inst.match(/[a-z]+|[^a-z]+/gi);
};

console.log(calcCoords(instList1));
