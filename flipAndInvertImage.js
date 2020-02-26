/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let solution = []
    A.forEach(arr => {
        let inverted = []
        arr.forEach(el => {
            el === 0 ? inverted.push(1) : inverted.push(0);
        })
        solution.push(inverted.reverse())
    })
    return solution;
};