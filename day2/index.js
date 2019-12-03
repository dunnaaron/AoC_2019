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

const findNounAndVerb = nums => {
	for (noun = 0; noun < 100; noun++) {
		for (verb = 0; verb < 100; verb++) {
			var numsReset = nums.slice();

			numsReset[1] = noun;
			numsReset[2] = verb;

			var result = executeIntCode(numsReset, 0);

			if (result[0] === 19690720) {
				console.log(100 * noun + verb);
				break;
			}
		}
	}
}

findNounAndVerb(ints);