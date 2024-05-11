const fs = require("fs");

function isNumber(val: string | number) {
	return val != null && val !== "" && !isNaN(Number(val.toString()));
}

function sum(vals: Array<number>): number {
	let sum = 0;
	vals.forEach((el: number) => {
		sum += el;
	});
	return sum;
}

function getvals(data: string): Array<number> {
	const list: Array<string> = data.split("\n");
	const vals: Array<number> = [];

	list.forEach((el) => {
		let value: number = 10;
		for (let i = 0; i < el.length; i++) {
			if (isNumber(el[i])) {
				value = value * Number(el[i]);
				break;
			}
		}

		for (let j = el.length - 1; j >= 0; j--) {
			if (isNumber(el[j])) {
				value = value + Number(el[j]);
				break;
			}
		}

		vals.push(value);
	});
	return vals;
}

try {
	const data: string = fs.readFileSync("input.txt", "utf8");
	const vals: Array<number> = getvals(data);
	console.log(sum(vals));
} catch (err) {
	console.error(err);
}
