// ## Задание 8

// Написать функцию, которая принимает строку и возвращает данную строку, но в lowerCamelCase нотации.
function toLowerCamelCase(str){
    var words = str.toLowerCase().split(' ');
    var i;
    for ( i = 1 ; i < words.length ; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } 
    return words.join('');
}
console.log(toLowerCamelCase('I was walking In The park'));
console.log(toLowerCamelCase('Evelien Foubert'));
console.log(toLowerCamelCase(''));
console.log(toLowerCamelCase(' '));
console.log(toLowerCamelCase('123'));