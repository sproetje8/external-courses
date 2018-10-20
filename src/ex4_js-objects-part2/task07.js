// ## Задание 7

// // Написать функцию, которая принимает два аргумента, строку и число. Если длина строки больше, чем переданное число, то строка урезается и в конец добавляется «…», так чтобы длина отрезанной строки вместе с «…» (три точки) равнялась переданному числу.
function adaptStringToNum(str, num){
    if (typeof str === 'string' && typeof num === 'number'){
        if (num < 3){
            console.log('Number must be 3 or more');
        }
        else if (num === 3){
            console.log('...');
        }
        else if (str.length < (num - 3)){
            console.log('string is too short');
        }
        else if (str.length === (num - 3)){
            console.log(str + '...');
        }
        else {
            console.log(str.slice(0, num-3) + '...');
        }
    } 
}
adaptStringToNum('The big brown fox', 8);
adaptStringToNum('',6);
adaptStringToNum('one', 3);
adaptStringToNum('', 3);
adaptStringToNum('Dreamer', 9);
adaptStringToNum('hello', 15);