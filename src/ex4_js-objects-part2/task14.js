// ## Задание 14

// Написать функцию, которая возвращает целое случайное число в диапазоне от [`min`; `max`].
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(5, 15));
