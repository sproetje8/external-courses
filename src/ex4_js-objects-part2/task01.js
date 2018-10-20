// // // ## Задание 1

// // // Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе переданного объекта (объект создать заранее через Object.create()).
var obj = {a:1, b:2};
var obj1 = Object.create(obj);
var f = function(obj, key){
        if (key in obj && !obj.hasOwnProperty(key)){
            console.log(key);
        }
}
obj1.c = 3;
f(obj1);
f(obj1, 'b');
f(obj1, 'c');
f(obj1, 'd');