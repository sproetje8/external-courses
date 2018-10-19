// ## Задание 4

// Написать функцию, которая принимает строку и возвращает эту же строку, на с заглавным первым символом.
function upperFirst(string){
    return string[0].toUpperCase() + string.slice(1);
}
console.log(upperFirst('attention'));