var fs = require("fs");
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
        }
        for (var j = el.length - 1; j >= 0; j--) {
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
    var data = fs.readFileSync("input.txt", "utf8");
    var vals = getvals(data);
    console.log(sum(vals));
}
catch (err) {
    console.error(err);
}
