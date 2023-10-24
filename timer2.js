const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beep = () => process.stdout.write('\x07');

rl.on('line', (input) => {
  if (input === 'b') {
    beep();
  } else if (Number(input) >= 1 && Number(input) <= 9) {
    console.log(`Setting timer for ${input} seconds...`);
    setTimeout(beep, Number(input) * 1000);
  }
});

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  process.exit();
});