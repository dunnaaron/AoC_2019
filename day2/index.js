const ints = require('fs')
		.readFileSync('./input.txt', 'utf8')
		.split(',')
		.filter(line => line)
		.map(i => parseInt(i));

const executeIntCode = (nums, index) => {
	var index = index;
	var alteredNums = evalOpCode(nums, index);

	index += 4;

	return nums[index] == 99 ? alteredNums : executeIntCode(alteredNums, index);
}

const evalOpCode = (nums, index) => {
	var resultArr = nums;

	if (nums[index] == 1) {
		resultArr[resultArr[index + 3]] = resultArr[resultArr[index + 1]] + resultArr[resultArr[index + 2]];
		return resultArr; 
	}

	if (nums[index] == 2) {
		resultArr[resultArr[index + 3]] = resultArr[resultArr[index + 1]] * resultArr[resultArr[index + 2]];
		return resultArr; 
	}

	return resultArr;
}

ints[1] = 12;
ints[2] = 2;

console.log(executeIntCode(ints, 0));
