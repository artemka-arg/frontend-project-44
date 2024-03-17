import round, { randomNumber } from '../index.js';

const isEven = (num) => num % 2 === 0;

const randomQuestion = () => {
  const number = randomNumber(1, 50);
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return [number, expectedAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  round(description, randomQuestion);
};
