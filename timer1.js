process.stdout.write('\x07');
const parms = Array.from(process.argv.splice(2)).sort((a, b) => a - b);
const childProcess  = require('child_process');

const timer = (numbers) => {
	let timer = Number(numbers[0]) * 1000;
	let index = 0;
	const counter = () => {
		for (const element of numbers) {
			if (index < numbers.length) {
				process.stdout.write('\x07');
				index++
				setTimeout(counter, timer)
				timer = Number(element) * 1000
			}
		}
	}

	setTimeout(counter, timer)

}

timer(parms)

