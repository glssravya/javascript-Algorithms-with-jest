// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}
    let max = 0;
    let maxChar = '';
    for(let char of str){
        chars[char] = chars[char]+1 || 1;
    }
    for(let char in chars){
        if(chars[char] > max){
            max = chars[char]
            maxChar = char
        }
    }
    //console.log(maxChar);
    return maxChar;
}
//maxChar('hello worldddd');

module.exports = maxChar;