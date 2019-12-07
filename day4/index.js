var nums = require('fs').readFileSync('./input.txt', 'utf8').split('-');
nums[1] = nums[1].replace('\n', '');

var filterNums = nums => {
    var possiblePasswords = []

    for(let i = nums[0]; i <= nums[1]; i++) {
        if(verifiedMatch(i)) {
            possiblePasswords.push(i);
        }
    }

    return possiblePasswords.length;
}

var verifiedMatch = num => {
    var sameAdjacentNums = false;
    var hasIncreasingDigits = true;

    num = num.toString()

    for(let i = 1; i < num.length; i++) {
        if(num[i] == num[i - 1]) {
            sameAdjacentNums = true;
        }
        if(num[i] < num[i - 1]) {
            hasIncreasingDigits = false;
        }
    }

    return isLengthSix(num) && sameAdjacentNums && hasIncreasingDigits;
}

var isLengthSix = num => num.length === 6;

console.time('filterNums');
console.log(filterNums(nums));
console.timeEnd('filterNums');

