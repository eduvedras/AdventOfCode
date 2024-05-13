var fs = require("fs");
function isNumeric(value) {
    return /\d/.test(value);
}
function isSpecialCharacter(value, i, j, gears) {
    var gear = { x: i, y: j };
    if (value === "*" &&
        !gears.some(function (gear) { return gear.x === gear.x && gear.y === gear.y; })) {
        gears.push(gear);
    }
    return value !== "." && !isNumeric(value);
}
try {
    var data = fs.readFileSync("input.txt", "utf8");
    var lines = data.split("\n");
    var numbers = new Map();
    var result_1 = 0;
    for (var i = 0; i < lines.length; i++) {
        var number = "";
        var is_part_number = false;
        var gears = [];
        for (var j = 0; j < lines[i].length; j++) {
            if (isNumeric(lines[i][j])) {
                number += lines[i][j];
                if (i === 0 && j === 0) {
                    if (isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
                        isSpecialCharacter(lines[i + 1][j + 1], i + 1, j + 1, gears)) {
                        is_part_number = true;
                    }
                }
                else if (i === 0 && j === lines[i].length - 1) {
                    if (isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j - 1], i + 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j], i + 1, j, gears)) {
                        is_part_number = true;
                    }
                }
                else if (i === lines.length - 1 && j === 0) {
                    if (isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
                        isSpecialCharacter(lines[i - 1][j + 1], i - 1, j + 1, gears) ||
                        isSpecialCharacter(lines[i][j + 1], i, j + 1, gears)) {
                        is_part_number = true;
                    }
                }
                else if (i === lines.length - 1 &&
                    j === lines[i].length - 1) {
                    if (isSpecialCharacter(lines[i - 1][j - 1], i - 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
                        isSpecialCharacter(lines[i][j - 1], i, j - 1, gears)) {
                        is_part_number = true;
                    }
                }
                else if (i === 0) {
                    if (isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
                        isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j - 1], i + 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
                        isSpecialCharacter(lines[i + 1][j + 1], i + 1, j + 1, gears)) {
                        is_part_number = true;
                    }
                }
                else if (i === lines.length - 1) {
                    if (isSpecialCharacter(lines[i - 1][j - 1], i - 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
                        isSpecialCharacter(lines[i - 1][j + 1], i - 1, j + 1, gears) ||
                        isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
                        isSpecialCharacter(lines[i][j + 1], i, j + 1, gears)) {
                        is_part_number = true;
                    }
                }
                else if (j === 0) {
                    if (isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
                        isSpecialCharacter(lines[i - 1][j + 1], i - 1, j + 1, gears) ||
                        isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
                        isSpecialCharacter(lines[i + 1][j + 1], i + 1, j + 1, gears)) {
                        is_part_number = true;
                    }
                }
                else if (j === lines[i].length - 1) {
                    if (isSpecialCharacter(lines[i - 1][j - 1], i - 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
                        isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j - 1], i + 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j], i + 1, j, gears)) {
                        is_part_number = true;
                    }
                }
                else {
                    if (isSpecialCharacter(lines[i - 1][j - 1], i - 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i - 1][j], i - 1, j, gears) ||
                        isSpecialCharacter(lines[i - 1][j + 1], i - 1, j + 1, gears) ||
                        isSpecialCharacter(lines[i][j - 1], i, j - 1, gears) ||
                        isSpecialCharacter(lines[i][j + 1], i, j + 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j - 1], i + 1, j - 1, gears) ||
                        isSpecialCharacter(lines[i + 1][j], i + 1, j, gears) ||
                        isSpecialCharacter(lines[i + 1][j + 1], i + 1, j + 1, gears)) {
                        is_part_number = true;
                    }
                }
            }
            else {
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
    var gearskeys_1 = new Map();
    numbers.forEach(function (gears, number) {
        gears.forEach(function (gear) {
            var key = gear.x.toString() + "," + gear.y.toString();
            if (gearskeys_1.has(key)) {
                gearskeys_1.get(key).push(Number(number.split(",")[2]));
            }
            else {
                gearskeys_1.set(key, [Number(number.split(",")[2])]);
            }
        });
    });
    gearskeys_1.forEach(function (numbers, gear) {
        if (numbers.length === 2) {
            result_1 += numbers[0] * numbers[1];
        }
    });
    console.log(result_1);
}
catch (err) {
    console.error(err);
}
