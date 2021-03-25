// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverseStr='';
    //using reverse method
    // reverseStr = str.split('').reverse().join('');
    //---------************-----------
    //Using loop
    // for(let character of str){
    //     reverseStr = character+reverseStr;
    // }
    //---------************-----------
    reverseStr = str.split('').reduce((rev,char) => char+rev ,'');
   // console.log(reverseStr);
    //---------************-----------
   return reverseStr;

}
reverse(' sravya');
module.exports = reverse


