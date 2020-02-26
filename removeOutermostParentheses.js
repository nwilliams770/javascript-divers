/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    // Using an array because str.split() is kind of pain, we can just null out values
    // and join the result to make a result str
    // Using a counter to signify when we've hit certain chars
        var stringArray = S.split(""),
            counter = 0,
            openParen,
            closeParen;


        for (var i = 0; i < S.length; i++) {
            if (S[i] === "(") {
                if (counter === 0) openParen = i;
                counter += 1;
            }

            if (S[i] === ")") {
                counter -= 1;
                if (counter === 0) closeParen = i;
            }

            if (counter === 0) {
                stringArray[openParen] = null;
                stringArray[closeParen] = null;
            }
        }

        return stringArray.join("");
    };