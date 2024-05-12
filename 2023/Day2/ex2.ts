const fs = require("fs");

const maxred = 12;
const maxgreen = 13;
const maxblue = 14;

interface balls {
	red: Array<number>;
	green: Array<number>;
	blue: Array<number>;
}

try {
	const data: string = fs.readFileSync("input.txt", "utf8");
	const games = new Map<number, balls>();
	const lines = data.split("\n");

	lines.forEach((line: string) => {
		const id: number = Number(line.slice(5).split(":")[0]);

		const game_balls: balls = {
			red: [],
			green: [],
			blue: [],
		};

		const sets: Array<string> = line.split(":")[1].split(";");
		sets.forEach((game: string) => {
			const set: Array<string> = game.split(",");

			set.forEach((ball: string) => {
				const n_balls: number = Number(ball.slice(1).split(" ")[0]);
				const color: string = ball.slice(1).split(" ")[1];

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
		games.set(id, game_balls);
	});

	let result: number = 0;

	for (let [key, value] of Array.from(games.entries())) {
		let possible: boolean = true;
		for (let i = 0; i < value.red.length; i++) {
			if (value.red[i] > maxred) {
				possible = false;
			}
		}
		for (let i = 0; i < value.green.length; i++) {
			if (value.green[i] > maxgreen) {
				possible = false;
			}
		}
		for (let i = 0; i < value.blue.length; i++) {
			if (value.blue[i] > maxblue) {
				possible = false;
			}
		}

		if (possible === true) {
			result = result + key;
		}
	}
	console.log(result);
} catch (err) {
	console.error(err);
}
