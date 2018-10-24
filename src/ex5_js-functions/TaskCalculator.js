var Calculator = CalculatorConstructor();
function CalculatorConstructor(){
    var result = 0;
    var action = '';

    function subCalculator(number){
        if (action === 'add'){
            return add(number); 
        }
        if (action === 'subtract'){
            return subtract(number);
        }
        if (action === 'multiply'){
            return multiply(number);
        }
        if (action === 'divide'){
            return divide(number);
        } 
        return subCalculator;
    }

    function add(number) {
        if (typeof number === 'undefined'){
            result = 0;
            return subCalculator;
        } 

        result += number;
        action = 'add';
        return subCalculator;
        
    }

    function subtract(number) {
        if (typeof number === 'undefined'){
            result = 0;
            return subCalculator;
        } 
        
        result -= number;
        action = 'subtract';
        return subCalculator;
        
    }

    function multiply(number) {
        if (typeof number === 'undefined'){
            result = 0;
            return subCalculator;
        } 
        
        result *= number;
        action = 'multiply';
        return subCalculator;
        
    }

    function divide(number) {
        if (typeof number === 'undefined'){
            result = 0;
            return subCalculator;
        } 
        if (number === 0) {
            result = 0;
            return subCalculator;
        } 

        result /= number;
        action = 'divide';
        return subCalculator;
        
    }

    function getResult() {
        return result;
    }

    function reset() {
        result = 0;
        action = 'add';
        return subCalculator;
    }

    subCalculator.add = add;
    subCalculator.subtract = subtract;
    subCalculator.multiply = multiply;
    subCalculator.divide = divide;
    subCalculator.getResult = getResult;
    subCalculator.reset = reset;

    return subCalculator;    
}

console.log(Calculator.add(5).getResult());
console.log(Calculator.add(3)(5)(2).getResult());
console.log(Calculator.add().getResult());
console.log(Calculator.subtract(2)(5).add(10).multiply(6).divide(2).getResult());
console.log(Calculator.add(3)(5)(10).reset().getResult());
console.log(Calculator.add().multiply().getResult());
