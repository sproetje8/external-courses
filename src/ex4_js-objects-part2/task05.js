// ## Задание 5

// Написать функцию, которая ищет одну строку в другой строке и возвращает `true`, если такая строка найдена.

function substringInString(str1){
    var str = 'We never know.'
    return str.includes(str1);
}
console.log(substringInString('no'));
console.log(substringInString('will'));
console.log(substringInString(' ne'));
console.log(substringInString('0'));
