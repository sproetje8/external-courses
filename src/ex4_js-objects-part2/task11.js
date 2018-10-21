// // ## Задание 11

// // Написать функцию, которая посчитает сколько раз каждый символ встречается в строке.
function countElememtsRegularity(str){
    var obj = {};
    var strArray = str.split('');
    var i;

    for (i = 0; i < strArray.length; i++){
        if (obj.hasOwnProperty(strArray[i])){
            obj[strArray[i]]++;
        } else {
            obj[strArray[i]] = 1;
        }
    }
    return obj;
}
console.log(countElememtsRegularity('Forever'));
console.log(countElememtsRegularity('Whatever the weather'));
console.log(countElememtsRegularity(''));
console.log(countElememtsRegularity('The quick brown fox jumps over the lazy dog.'));
console.log(countElememtsRegularity('October 22, 2018'));
console.log(countElememtsRegularity('$ \'_%%&&&@'));
