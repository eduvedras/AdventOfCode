const fs = require("fs");

const digit = new Map<string, number>();

digit.set("one", 1);
digit.set("two", 2);
digit.set("three", 3);
digit.set("four", 4);
digit.set("five", 5);
digit.set("six", 6);
digit.set("seven", 7);
digit.set("eight", 8);
digit.set("nine", 9);

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
			const substring: string = el.slice(0, i + 1);

			let gotfirstnumber: boolean = false;
			for (let key of Array.from(digit.keys())) {
				if (substring.includes(key)) {
					value = value * digit.get(key)!;
					gotfirstnumber = true;
					break;
				}
			}

			if (gotfirstnumber) {
				break;
			}
		}

		for (let j = el.length - 1; j >= 0; j--) {
			if (isNumber(el[j])) {
				value = value + Number(el[j]);
				break;
			}

			const substring: string = el.slice(j, el.length);

			let gotsecondnumber: boolean = false;
			for (let key of Array.from(digit.keys())) {
				if (substring.includes(key)) {
					value = value + digit.get(key)!;
					gotsecondnumber = true;
					break;
				}
			}

			if (gotsecondnumber) {
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
