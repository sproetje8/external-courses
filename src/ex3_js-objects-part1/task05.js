// ## Задание №5

// Написать функцию, которая принимает объект и создает его копию (новую ссылку) и возвращает скопированный объект
var obj2;
function copy(obj){
    obj2 = {};
    for (key in obj){
        obj2[key] = obj[key];
    } 
    return obj2;
}
obj = {d:5, b:2, r:'hello'};
console.log(copy(obj));
console.log(obj2);
obj.a = 100;
console.log(obj);
console.log(obj2);
console.log(copy(obj));
