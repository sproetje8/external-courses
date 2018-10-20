// ## Задание 3

// Написать функцию, которая удаляет первый и последний пробел с строке и возвращает строку без начального и завершающего пробела.
function trimmedString(str){
    return str.trim();
}
console.log(trimmedString(' Attention, please '));
console.log(trimmedString(' At the top.'));
console.log(trimmedString('At the top. '));
console.log(trimmedString('  At the top.  '));
