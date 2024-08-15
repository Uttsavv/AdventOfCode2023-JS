const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }

    const ans = getCalibration(data);
    console.log(ans);
});

const isNumber = (char) => {
    if ("0" <= char && char <= "9") {
        return true;
    }

    return false;
};

const getCalibration = (data) => {
    const lines = data.split("\n");
    let sum = 0;

    for (const line of lines) {
        if (line.length <= 0) continue;
        let first = -1,
            second = -1;
        for (const char of line) {
            if (!isNumber(char)) {
                continue;
            }

            if (first === -1) {
                first = Number(char);
                second = Number(char);
            } else {
                second = Number(char);
            }
        }
        console.log(10 * first + second);
        sum += 10 * first + second;
    }

    return sum;
};
