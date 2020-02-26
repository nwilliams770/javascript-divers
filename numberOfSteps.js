/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    var count = 0;
    var adjustedNum = num;
    if (adjustedNum % 2 !== 0) {
            adjustedNum = adjustedNum - 1;
            count++;
    }

    while (adjustedNum > 0) {
        adjustedNum = adjustedNum / 2;
        count++;
        if (adjustedNum % 2 !== 0) {
            adjustedNum = adjustedNum - 1;
            count++;
        }
    }
    return count;
};