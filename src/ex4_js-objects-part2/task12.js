// ## Задание 12

// Написать функцию, которая складывает два числа и результат округляется до 3го знака после запятой. Возвращаемый результат должен быть числом.
function sum(a, b){
    var res = a + b;
    if (typeof res === 'number'){
    }
    return res.toFixed(3);
}
console.log(sum(3.45, 5.36469));
console.log(sum(0, 0));
console.log(sum(3, 5));
console.log(sum(4.1, 23.1));