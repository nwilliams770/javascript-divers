var defangIPaddr = function(address) {
    let solution = "";
    for (let i = 0; i < address.length; i++) {
        if (address.charAt(i) === ".") {
            solution += "[.]"
        } else {
            solution += address.charAt(i);
        }
    }
    return solution;
};