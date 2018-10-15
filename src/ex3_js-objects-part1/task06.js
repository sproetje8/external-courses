// ## Задание №6 💪

// Написать функцию, которая делает глубокую копию (deep clone) объекта. Глубокая копия, значит, что если одно из свойств содержит объект оно также должно быть скопировано, чтобы создалась новая ссылка на соответствующий объект. Глубина вложенности может быть бесконечной, поэтому надо использовать рекурсию.
var obj;
function deepClone(obj, nestedObj){
    var key;
    var cloneObj = nestedObj ? nestedObj : {};
    for (key in obj){
        if (obj.hasOwnProperty(key)){
            if (typeof obj[key] === 'object'){
                cloneObj[key] = {};
                deepClone(obj[key], cloneObj[key]);
            } else {
                cloneObj[key] = obj[key];
            }
        }
    }
    return cloneObj;
}
obj = {d:5, b:2, car:{brand:'Lada', type:'2110'}};
var a = deepClone(obj);
console.log(a);
console.log(a === obj);
console.log(a.car === obj.car);
obj1 = {};
console.log(deepClone(obj1));