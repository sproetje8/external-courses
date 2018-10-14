// ## Задание №5

// Написать функцию, которая принимает объект и создает его копию (новую ссылку) и возвращает скопированный объект
function copy(obj){
    var obj2 = {};
    for (var key in obj){
        if (obj.hasOwnProperty(key)){
        obj2[key] = obj[key];
        }
    } 
    return obj2;
}
obj = {d:5, b:2, r:'hello'};
console.log(copy(obj));
console.log(obj === copy(obj)); //checking if the objects are the same
obj.a = 100; //to change obj to compare with copy(obj)
console.log(obj); 
console.log(obj === copy(obj)); // to check if they have different references
