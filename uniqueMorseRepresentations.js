/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let solution = {};
    words.forEach(word => {
        let translation = "";
        for (let i = 0; i < word.length; i++) {
            let index = alphabet.indexOf(word[i]);
            translation += morse[index]
        }
        solution[translation] += 1;
    })

    return Object.keys(solution).length;
};