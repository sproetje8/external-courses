// ## Задание №3

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать `true` или `false`.
var obj;
function checkKeyinObj(str, obj){
   console.log(str in obj);
}
checkKeyinObj('idiot', {b:5, c: 'liters'});
checkKeyinObj('help', {page:6, paragraph:'Help'});

