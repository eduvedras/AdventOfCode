var fs = require("fs");
var digit = new Map();
digit.set("one", 1);
digit.set("two", 2);
digit.set("three", 3);
digit.set("four", 4);
digit.set("five", 5);
digit.set("six", 6);
digit.set("seven", 7);
digit.set("eight", 8);
digit.set("nine", 9);
function isNumber(val) {
    return val != null && val !== "" && !isNaN(Number(val.toString()));
}
function sum(vals) {
    var sum = 0;
    vals.forEach(function (el) {
        sum += el;
    });
    return sum;
}
function getvals(data) {
    var list = data.split("\n");
    var vals = [];
    list.forEach(function (el) {
        var value = 10;
        for (var i = 0; i < el.length; i++) {
            if (isNumber(el[i])) {
                value = value * Number(el[i]);
                break;
            }
            var substring = el.slice(0, i + 1);
            var gotfirstnumber = false;
            for (var _i = 0, _a = Array.from(digit.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                if (substring.includes(key)) {
                    value = value * digit.get(key);
                    gotfirstnumber = true;
                    break;
                }
            }
            if (gotfirstnumber) {
                break;
            }
        }
        for (var j = el.length - 1; j >= 0; j--) {
            if (isNumber(el[j])) {
                value = value + Number(el[j]);
                break;
            }
            var substring = el.slice(j, el.length);
            var gotsecondnumber = false;
            for (var _b = 0, _c = Array.from(digit.keys()); _b < _c.length; _b++) {
                var key = _c[_b];
                if (substring.includes(key)) {
                    value = value + digit.get(key);
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
    var data = fs.readFileSync("input.txt", "utf8");
    var vals = getvals(data);
    console.log(sum(vals));
}
catch (err) {
    console.error(err);
}
