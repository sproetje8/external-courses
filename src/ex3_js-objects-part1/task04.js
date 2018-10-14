// ## Задание №4

// Написать функцию, которая принимает строку и объект, проверяет есть ли у переданного объекта свойство с данным именем, если такое свойство отсутствует, то добавляет его и устанавливает значение ‘new’. Функция должна возвращать исходный или модифицированный объект.
var obj;
var key;
function addMissingKeys(str, obj){
    if (!(key in obj)){
        obj[key] = 'new';
    }
    return obj;
}
obj = {name:'Evelien', lang:'English'};
key = 'experience';
console.log(addMissingKeys('translator', obj));