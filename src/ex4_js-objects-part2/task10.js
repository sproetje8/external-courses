// ## Задание 10

// Написать функцию, которая принимает строку и возвращает перевернутую строку.
function turnOver(str){
    var strArray = str.split('');
    var turned = [];
    var turnedStr;
    var x = str.length;
    var i;
    for ( i = x - 1, j = 0; i >= 0; i--){
        turned[j] = strArray[i];
        j++;
    }
    turnedStr = turned.join("");
    return turnedStr;
}
console.log(turnOver('pacer'));
console.log(turnOver('We are trying!'));
console.log(turnOver('1234'));
console.log(turnOver(''));