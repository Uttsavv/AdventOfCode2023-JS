const fs = require("fs");

// fs.readFile("./exampleInput.txt", "utf-8", (err, data) => {
fs.readFile("./input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }

    const ans = getCalibration(data);
    console.log(ans);
});

const isNumber = (ch) => {
    if ("0" <= ch && ch <= "9") {
        return true;
    }

    return false;
};

const nameToNumberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

const checkNumberInWord = (str) => {
    let num = -1,
        n = str.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            slicedWord = str.slice(i, j);
            if (slicedWord in nameToNumberMap) {
                num = nameToNumberMap[slicedWord];
            }
        }
    }
    return num;
};

const getCalibration = (data) => {
    const lines = data.split("\n");
    let sum = 0;

    for (const line of lines) {
        if (line.length <= 0) continue;
        let first = -1,
            second = -1,
            word = "";
        for (const char of line) {
            let num = -1;
            if (!isNumber(char)) {
                word += char;
                num = checkNumberInWord(word);
            } else {
                num = Number(char);
                word = "";
            }
            if (num === -1) continue;
            if (first === -1) {
                first = num;
                second = num;
            } else {
                second = num;
            }
        }
        console.log(10 * first + second);
        sum += 10 * first + second;
    }

    return sum;
};
