import round, { randomNumber } from '../index.js';

const randomProgression = () => {
  const start = randomNumber(1, 20);
  const step = randomNumber(1, 10);
  const numbersCount = randomNumber(5, 10);
  const index = randomNumber(0, numbersCount - 1);
  const numbers = [];

  for (let i = start; numbers.length < numbersCount; i += step) {
    numbers.push(`${i}`);
  }

  const expectedAnswer = numbers[index];
  numbers[index] = '..';
  const progression = numbers.join(' ');

  return [progression, expectedAnswer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  round(description, randomProgression);
};
