class Factorial {
  constructor() {
    this.result;
  }

  getResult() {
    return this.result;
  }

  buildArray(amount) {
    const arrayNumbers = [];

    for (let index = 1; index <= amount; index++) {
      arrayNumbers.push(index);
    }

    return arrayNumbers;
  }

  factorial(amount) {

    let result = 1;

    if (amount.length === 1 || amount.length === 0) {
      return result;
    }

    for (let index = 2; index <= amount.length; index++) {
      result *= index;
    }

    return result;

  }
}