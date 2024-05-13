const fs = require("fs");

function isNumeric(value: string): boolean {
	return /\d/.test(value);
}

function isSpecialCharacter(value: string): boolean {
	return value !== "." && !isNumeric(value);
}

try {
	const data: string = fs.readFileSync("input.txt", "utf8");
	const lines: Array<string> = data.split("\n");

	let result: number = 0;

	for (let i = 0; i < lines.length; i++) {
		let number: string = "";
		let is_part_number: boolean = false;
		for (let j = 0; j < lines[i].length; j++) {
			if (isNumeric(lines[i][j])) {
				number += lines[i][j];

				if (i === 0 && j === 0) {
					if (
						isSpecialCharacter(lines[i][j + 1]) ||
						isSpecialCharacter(lines[i + 1][j]) ||
						isSpecialCharacter(lines[i + 1][j + 1])
					) {
						is_part_number = true;
					}
				} else if (i === 0 && j === lines[i].length - 1) {
					if (
						isSpecialCharacter(lines[i][j - 1]) ||
						isSpecialCharacter(lines[i + 1][j - 1]) ||
						isSpecialCharacter(lines[i + 1][j])
					) {
						is_part_number = true;
					}
				} else if (i === lines.length - 1 && j === 0) {
					if (
						isSpecialCharacter(lines[i - 1][j]) ||
						isSpecialCharacter(lines[i - 1][j + 1]) ||
						isSpecialCharacter(lines[i][j + 1])
					) {
						is_part_number = true;
					}
				} else if (
					i === lines.length - 1 &&
					j === lines[i].length - 1
				) {
					if (
						isSpecialCharacter(lines[i - 1][j - 1]) ||
						isSpecialCharacter(lines[i - 1][j]) ||
						isSpecialCharacter(lines[i][j - 1])
					) {
						is_part_number = true;
					}
				} else if (i === 0) {
					if (
						isSpecialCharacter(lines[i][j - 1]) ||
						isSpecialCharacter(lines[i][j + 1]) ||
						isSpecialCharacter(lines[i + 1][j - 1]) ||
						isSpecialCharacter(lines[i + 1][j]) ||
						isSpecialCharacter(lines[i + 1][j + 1])
					) {
						is_part_number = true;
					}
				} else if (i === lines.length - 1) {
					if (
						isSpecialCharacter(lines[i - 1][j - 1]) ||
						isSpecialCharacter(lines[i - 1][j]) ||
						isSpecialCharacter(lines[i - 1][j + 1]) ||
						isSpecialCharacter(lines[i][j - 1]) ||
						isSpecialCharacter(lines[i][j + 1])
					) {
						is_part_number = true;
					}
				} else if (j === 0) {
					if (
						isSpecialCharacter(lines[i - 1][j]) ||
						isSpecialCharacter(lines[i - 1][j + 1]) ||
						isSpecialCharacter(lines[i][j + 1]) ||
						isSpecialCharacter(lines[i + 1][j]) ||
						isSpecialCharacter(lines[i + 1][j + 1])
					) {
						is_part_number = true;
					}
				} else if (j === lines[i].length - 1) {
					if (
						isSpecialCharacter(lines[i - 1][j - 1]) ||
						isSpecialCharacter(lines[i - 1][j]) ||
						isSpecialCharacter(lines[i][j - 1]) ||
						isSpecialCharacter(lines[i + 1][j - 1]) ||
						isSpecialCharacter(lines[i + 1][j])
					) {
						is_part_number = true;
					}
				} else {
					if (
						isSpecialCharacter(lines[i - 1][j - 1]) ||
						isSpecialCharacter(lines[i - 1][j]) ||
						isSpecialCharacter(lines[i - 1][j + 1]) ||
						isSpecialCharacter(lines[i][j - 1]) ||
						isSpecialCharacter(lines[i][j + 1]) ||
						isSpecialCharacter(lines[i + 1][j - 1]) ||
						isSpecialCharacter(lines[i + 1][j]) ||
						isSpecialCharacter(lines[i + 1][j + 1])
					) {
						is_part_number = true;
					}
				}
			} else {
				if (is_part_number) {
					result += Number(number);
				}
				number = "";
				is_part_number = false;
			}

			if (j === lines[i].length - 1 && is_part_number) {
				result += Number(number);
			}
		}
	}
	console.log(result);
} catch (err) {
	console.error(err);
}
