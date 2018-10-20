// ## Задание 6

// Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом каждого слова.
function capitalizeFirstSymbols(str){
    str = str.split(' ');
    for (var i = 0, j = str.length; i < j ; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(capitalizeFirstSymbols('amanda christina orwell'));
console.log(capitalizeFirstSymbols('123'));
console.log(capitalizeFirstSymbols('123 kg'));
console.log(capitalizeFirstSymbols('123goals'));
console.log(capitalizeFirstSymbols('$ 20'));
