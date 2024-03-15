import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const randomNum = () => Math.ceil(Math.random() * 50);

export default () => {
  // GREETING
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // EVEN GAME
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomNum();
    const userAnswer = readlineSync.question(`Question: ${number}
Your answer: `);
    const expectedAnswer = isEven(number) ? 'yes' : 'no';

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
Let's try again, ${name}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
