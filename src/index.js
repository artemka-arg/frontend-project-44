import readlineSync from 'readline-sync';

export default (description, generator) => {
  // GREETING AND DESCRIPTION OF THE GAME
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  // GENERATE AN EXPRESSION
  for (let i = 0; i < 3; i += 1) {
    const [question, expectedAnswer] = generator();
    const userAnswer = readlineSync.question(`Question: ${question}
Your answer: `);

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
