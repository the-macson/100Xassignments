/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add (num) {
    this.result += num;
  }
  subtract (num) {
    this.result -= num;
  }
  multiply (num) {
    this.result *= num;
  }
  divide (num) {
    if(num === 0) {
      throw new Error('Cannot divide by 0');
    }
    this.result /= num;
  }
  clear () {
    this.result = 0;
  }
  getResult () {
    return this.result;
  }
  calculate (str) {
    // let arr = str.split(' ');
    // let stack = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if(arr[i] === ' ') {
    //     continue;
    //   }
    //   if(arr[i].match(/[^0-9\+\-\*\/\(\)]/)) {
    //     throw new Error('Invalid input');
    //   }
    //   if (arr[i] === '(') {
    //     stack.push(arr[i]);
    //   } else if (arr[i] === ')') {
    //     while (stack[stack.length - 1] !== '(') {
    //       this.performOperation(stack.pop(),stack);
    //     }
    //     stack.pop();
    //   } else if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
    //     while (stack.length && this.getPrecedence(stack[stack.length - 1]) >= this.getPrecedence(arr[i])) {
    //       this.performOperation(stack.pop(),stack);
    //     }
    //     stack.push(arr[i]);
    //   } else {
    //     this.performOperation(arr[i],stack);
    //   }
    // }
    // while (stack.length) {
    //   this.performOperation(stack.pop(),stack);
    // }
  }
  performOperation (str,stack) {
    if (str === '+') {
      this.add(stack.pop());
    } else if (str === '-') {
      this.subtract(stack.pop());
    } else if (str === '*') {
      this.multiply(stack.pop());
    } else if (str === '/') {
      this.divide(stack.pop());
    } else {
      stack.push(Number(str));
    }
  }
  getPrecedence (str) {
    if (str === '+' || str === '-') {
      return 1;
    } else if (str === '*' || str === '/') {
      return 2;
    } else {
      return 0;
    }
  }
}

module.exports = Calculator;
