// ## Задание №2

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения свойств. Данная функция не должна возвращать значение.
function showProps(obj){
    console.log(obj);
}
var obj1 = {a:1, b:'true'};
showProps(obj1);
var obj2 = {name:'David', lastName:'Malan', f:function(){
    console.log(CS50)
}
};
showProps(obj2);

/*variant 2: shows in console each key and its value separately*/
function showKeyValue(obj){
    for (var key in obj){
        console.log(key + " : " + obj[key]);
    }
}
var obj1 = {name:"Peter", age:35, score:"2+5"};
showKeyValue(obj1);