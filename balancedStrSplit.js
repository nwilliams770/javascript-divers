var balancedStringSplit = function(s) {
    let solution = 0,
        balanceVar = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "L") {
            balanceVar++;
        } else {
            balanceVar--;
        }

        if (balanceVar === 0) {
            solution++;
        }
    }
    return solution;
};