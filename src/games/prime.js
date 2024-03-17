import round, { randomNumber } from '../index.js';

const randomExpression = () => {
  const number = randomNumber(1, 100);
  if (number === 1) {
    return [1, 'no'];
  }

  let result = '';
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }

  const expectedAnswer = result || 'yes';

  return [number, expectedAnswer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  round(description, randomExpression);
};
