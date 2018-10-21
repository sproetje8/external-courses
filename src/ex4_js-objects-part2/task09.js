// ## Задание 9

// Написать функцию, которая принимает строку в другую строку, после переданного номера слова.
function insertString(str, str1, num){
    var strArray = str1.split(' ');
    var strEnd = strArray.slice(num);
    var strStart = strArray.slice(0, (num));
    var result = strStart.join(' ') + ' ' + str + ' ' + strEnd.join(' ');
    return result;
}
console.log(insertString('TO', 'I want to listen music.', 4));
console.log(insertString('Gorky Park', 'We \'re going to at 6 o\'clock.', 4));
console.log(insertString('20', 'All products together cost $ .', 5));
