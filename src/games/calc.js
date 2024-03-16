import round from '../index.js';

// FUNCTION FOR COMPOSING AN EXPRESSION
const randomNum = () => Math.ceil(Math.random() * 20);

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);

  return operators[randomIndex];
};

// FUNCTION FOR CALCULATING THE EXPRESSION
const expressionResult = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return `${number1 + number2}`;
    case '-':
      return `${number1 - number2}`;
    case '*':
      return `${number1 * number2}`;
    default:
      return Error("Please, use only numbers and signs '+', '-', '*'.");
  }
};

const randomExpression = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const operator = randomOperator();

  const expression = `${number1} ${operator} ${number2}`;
  const expectedAnswer = expressionResult(number1, number2, operator);
  return [expression, expectedAnswer];
};

// BRAIN-CALC GAME
export default () => {
  const description = 'What is the result of the expression?';
  round(description, randomExpression);
};
