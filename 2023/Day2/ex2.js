var fs = require("fs");
var maxred = 12;
var maxgreen = 13;
var maxblue = 14;
try {
    var data = fs.readFileSync("input.txt", "utf8");
    var games_1 = new Map();
    var lines = data.split("\n");
    lines.forEach(function (line) {
        var id = Number(line.slice(5).split(":")[0]);
        var game_balls = {
            red: [],
            green: [],
            blue: [],
        };
        var sets = line.split(":")[1].split(";");
        sets.forEach(function (game) {
            var set = game.split(",");
            set.forEach(function (ball) {
                var n_balls = Number(ball.slice(1).split(" ")[0]);
                var color = ball.slice(1).split(" ")[1];
                switch (color) {
                    case "red":
                        game_balls.red.push(n_balls);
                        break;
                    case "green":
                        game_balls.green.push(n_balls);
                        break;
                    case "blue":
                        game_balls.blue.push(n_balls);
                        break;
                }
            });
        });
        games_1.set(id, game_balls);
    });
    var result = 0;
    for (var _i = 0, _a = Array.from(games_1.entries()); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var possible = true;
        for (var i = 0; i < value.red.length; i++) {
            if (value.red[i] > maxred) {
                possible = false;
            }
        }
        for (var i = 0; i < value.green.length; i++) {
            if (value.green[i] > maxgreen) {
                possible = false;
            }
        }
        for (var i = 0; i < value.blue.length; i++) {
            if (value.blue[i] > maxblue) {
                possible = false;
            }
        }
        if (possible === true) {
            result = result + key;
        }
    }
    console.log(result);
}
catch (err) {
    console.error(err);
}
