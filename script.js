let firstName = prompt("Enter your name: ");
let birthYear = +prompt("Enter your birth year: ");
let currentYear = +prompt("Enter current year: ");

function info(name, birthYear, currentYear) {
    alert(name + ", Your age is " + (currentYear - birthYear));
    console.log(name + ", Your age is " + (currentYear - birthYear));
}

info(firstName, birthYear, currentYear);

let min = +prompt("Enter a minimal number: ");
let max = +prompt("Enter a maximal number: ");

function random(num1, num2) {
    return Math.floor(Math.random() * (num2 + 1 - num1) + num1);
}

alert("Примеры на СЛОЖЕНИЕ!");

for (let i = 0; i <= 5; i++) {
    let randNum1 = random(min, max);
    let randNum2 = random(min, max);

    let sample = +prompt(randNum1 + " + " + randNum2 + " = ?");

    let answer = randNum1 + randNum2 == sample ? "Correct!" : "Mistake!";

    alert(
        `${randNum1} + ${randNum2} = ${
            randNum1 + randNum2
        }. Your answer is ${sample}. ${answer}`
    );

    console.log(
        `${randNum1} + ${randNum2} = ${
            randNum1 + randNum2
        }. Your answer is ${sample}. ${answer}`
    );
}

alert("Примеры на ВЫЧИТАНИЕ!");

for (let i = 0; i < 5; i++) {
    let randNum1 = random(min, max);
    let randNum2 = random(min, max);

    let sample = +prompt(`${randNum1} - ${randNum2} = ?`);

    let answer = randNum1 - randNum2 == sample ? "Correct!" : "Mistake!";

    alert(
        `${randNum1} - ${randNum2} = ${
            randNum1 - randNum2
        }. Your answer is ${sample}. ${answer}`
    );

    console.log(
        `${randNum1} - ${randNum2} = ${
            randNum1 - randNum2
        }. Your answer is ${sample}. ${answer}`
    );
}

alert("Примеры на УМНОЖЕНИЕ!");

for (let i = 0; i < 5; i++) {
    let randNum1 = random(min, max);
    let randNum2 = random(min, max);

    let sample = +prompt(`${randNum1} * ${randNum2} = ?`);

    let answer = randNum1 * randNum2 == sample ? "Correct!" : "Mistake!";

    alert(
        `${randNum1} * ${randNum2} = ${
            randNum1 * randNum2
        }. Your answer is ${sample}. ${answer}`
    );

    console.log(
        `${randNum1} * ${randNum2} = ${
            randNum1 * randNum2
        }. Your answer is ${sample}. ${answer}`
    );
}

alert("Примеры на ДЕЛЕНИЕ!");

for (let i = 0; i < 5; i++) {
    let randNum1 = random(min, max);
    let randNum2 = random(min, max);

    let sample = +prompt(`${randNum1} / ${randNum2} = ?`);

    let answer = randNum1 / randNum2 == sample ? "Correct!" : "Mistake!";

    alert(
        `${randNum1} / ${randNum2} = ${
            randNum1 / randNum2
        }. Your answer is ${sample}. ${answer}`
    );

    console.log(
        `${randNum1} / ${randNum2} = ${
            randNum1 / randNum2
        }. Your answer is ${sample}. ${answer}`
    );
}
