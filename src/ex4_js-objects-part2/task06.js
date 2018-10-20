// ## Задание 6

// Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом каждого слова.
function capitalizeFirstSymbols(str){
    var str1 = str.split(' ');
    var i;
    for ( i = 0, j = str1.length; i < j ; i++){
        str1[i] = str1[i][0].toUpperCase() + str1[i].substr(1);
    }
    return str1.join(" ");
}
console.log(capitalizeFirstSymbols('amanda christina orwell'));
console.log(capitalizeFirstSymbols('123'));
console.log(capitalizeFirstSymbols('123 kg'));
console.log(capitalizeFirstSymbols('123goals'));
console.log(capitalizeFirstSymbols('$ 20'));

