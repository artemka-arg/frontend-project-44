import round from '../index.js';

const randomNum = () => Math.ceil(Math.random() * 10);

const divisor = (number) => {
  const result = [];
  for (let i = 1; i <= number / 2; i += 1) {
    const current = i.toString();
    if (number % i === 0) {
      result.push(current);
    }
  }

  const numberStr = number.toString();
  if (!result.includes(numberStr)) {
    result.push(numberStr);
  }

  return result;
};

const expressionResult = (number1, number2) => {
  const divisors1 = divisor(number1);
  const divisors2 = divisor(number2);
  const commonDivisors = [];

  for (let i = 0; i < divisors1.length; i += 1) {
    const currentDivisor1 = divisors1[i];

    for (let j = 0; j < divisors2.length; j += 1) {
      const currentDivisor2 = divisors2[j];
      if (currentDivisor1 === currentDivisor2) {
        commonDivisors.push(currentDivisor1);
        break;
      }
    }
  }

  const result = commonDivisors[commonDivisors.length - 1];
  return result;
};

const randomExpression = () => {
  const number1 = randomNum();
  const number2 = randomNum();

  const expression = `${number1} ${number2}`;
  const expectedAnswer = expressionResult(number1, number2);

  return [expression, expectedAnswer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  round(description, randomExpression);
};
