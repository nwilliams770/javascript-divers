var groupThePeople = function(groupSizes) {
    let result = [];
    let potentialGroups = {};

    for (let i = 0; i < groupSizes.length; i++) {
        if (groupSizes[i] === 1) {
            result.push([i]);
        } else {
//             If key doesn't exist, make it
            if (!potentialGroups.hasOwnProperty(groupSizes[i].toString())) {
                potentialGroups[groupSizes[i]] = [i];
            } else {
                potentialGroups[groupSizes[i]].push(i);
//                 If our potentialGroup is of adequate size, add to result
                if (potentialGroups[groupSizes[i]].length >= groupSizes[i]) {
                    result.push(potentialGroups[groupSizes[i]]);
                    potentialGroups[groupSizes[i]] = [];
                }
            }
        }
    }
    return result;
};