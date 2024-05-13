const fs = require("fs");

function isNumeric(value: string): boolean {
	return /\d/.test(value);
}

function isSpecialCharacter(
	value: string,
	i: number,
	j: number,
	gears: Array<gearpos>
): boolean {
	const gear: gearpos = { x: i, y: j };

	if (
		value === "*" &&
		!gears.some((gear) => gear.x === gear.x && gear.y === gear.y)
	) {
		gears.push(gear);
	}
	return value !== "." && !isNumeric(value);
}

interface gearpos {
	x: number;
	y: number;
}

try {
	const data: string = fs.readFileSync("input.txt", "utf8");
	const lines: Array<string> = data.split("\n");
	const numbers = new Map<string, Array<gearpos>>();

	let result: number = 0;

	for (let i = 0; i < lines.length; i++) {
		let number: string = "";
		let is_part_number: boolean = false;
		let gears: Array<gearpos> = [];
		for (let j = 0; j < lines[i].length; j++) {
			if (isNumeric(lines[i][j])) {
				number += lines[i][j];

				if (i === 0 && j === 0) {
					if (
						isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
						isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
						isSpecialCharacter(
							lines[i + 1][j + 1],
							i + 1,
							j + 1,
							gears
						)
					) {
						is_part_number = true;
					}
				} else if (i === 0 && j === lines[i].length - 1) {
					if (
						isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
						isSpecialCharacter(
							lines[i + 1][j - 1],
							i + 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i + 1][j], i + 1, j, gears)
					) {
						is_part_number = true;
					}
				} else if (i === lines.length - 1 && j === 0) {
					if (
						isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
						isSpecialCharacter(
							lines[i - 1][j + 1],
							i - 1,
							j + 1,
							gears
						) ||
						isSpecialCharacter(lines[i][j + 1], i, j + 1, gears)
					) {
						is_part_number = true;
					}
				} else if (
					i === lines.length - 1 &&
					j === lines[i].length - 1
				) {
					if (
						isSpecialCharacter(
							lines[i - 1][j - 1],
							i - 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
						isSpecialCharacter(lines[i][j - 1], i, j - 1, gears)
					) {
						is_part_number = true;
					}
				} else if (i === 0) {
					if (
						isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
						isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
						isSpecialCharacter(
							lines[i + 1][j - 1],
							i + 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
						isSpecialCharacter(
							lines[i + 1][j + 1],
							i + 1,
							j + 1,
							gears
						)
					) {
						is_part_number = true;
					}
				} else if (i === lines.length - 1) {
					if (
						isSpecialCharacter(
							lines[i - 1][j - 1],
							i - 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
						isSpecialCharacter(
							lines[i - 1][j + 1],
							i - 1,
							j + 1,
							gears
						) ||
						isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
						isSpecialCharacter(lines[i][j + 1], i, j + 1, gears)
					) {
						is_part_number = true;
					}
				} else if (j === 0) {
					if (
						isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
						isSpecialCharacter(
							lines[i - 1][j + 1],
							i - 1,
							j + 1,
							gears
						) ||
						isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
						isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
						isSpecialCharacter(
							lines[i + 1][j + 1],
							i + 1,
							j + 1,
							gears
						)
					) {
						is_part_number = true;
					}
				} else if (j === lines[i].length - 1) {
					if (
						isSpecialCharacter(
							lines[i - 1][j - 1],
							i - 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
						isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
						isSpecialCharacter(
							lines[i + 1][j - 1],
							i + 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i + 1][j], i + 1, j, gears)
					) {
						is_part_number = true;
					}
				} else {
					if (
						isSpecialCharacter(
							lines[i - 1][j - 1],
							i - 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
						isSpecialCharacter(
							lines[i - 1][j + 1],
							i - 1,
							j + 1,
							gears
						) ||
						isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
						isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
						isSpecialCharacter(
							lines[i + 1][j - 1],
							i + 1,
							j - 1,
							gears
						) ||
						isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
						isSpecialCharacter(
							lines[i + 1][j + 1],
							i + 1,
							j + 1,
							gears
						)
					) {
						is_part_number = true;
					}
				}
			} else {
				if (is_part_number) {
					numbers.set(i + "," + j + "," + number, gears);
				}
				number = "";
				is_part_number = false;
				gears = [];
			}

			if (j === lines[i].length - 1 && is_part_number) {
				numbers.set(i + "," + j + "," + number, gears);
			}
		}
	}

	const gearskeys = new Map<string, Array<number>>();

	numbers.forEach((gears: Array<gearpos>, number: string) => {
		gears.forEach((gear: gearpos) => {
			let key: string = gear.x.toString() + "," + gear.y.toString();
			if (gearskeys.has(key)) {
				gearskeys.get(key)!.push(Number(number.split(",")[2]));
			} else {
				gearskeys.set(key, [Number(number.split(",")[2])]);
			}
		});
	});

	gearskeys.forEach((numbers: Array<number>, gear: string) => {
		if (numbers.length === 2) {
			result += numbers[0] * numbers[1];
		}
	});

	console.log(result);
} catch (err) {
	console.error(err);
}
