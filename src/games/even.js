import round from '../index.js';

const isEven = (num) => num % 2 === 0;
const randomNum = () => Math.ceil(Math.random() * 50);

const randomQuestion = () => {
  const number = randomNum();
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return [number, expectedAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  round(description, randomQuestion);
};
