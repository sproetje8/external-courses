// // // ## Задание 1

// // // Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе переданного объекта (объект создать заранее через Object.create()).
var obj = {a:1, b:2};
var obj1 = Object.create(obj);
obj1.c = 3;
var f = function(obj, key){
    for (var key in obj){
        if (!obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}
f(obj1);