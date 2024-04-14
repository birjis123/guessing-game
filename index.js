#! usr/bin/env node

import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "Please guess a number 1-6",
    }
]);
if (answer.guessNumber === randomNumber) {
    console.log("you guessed the right number");
}
else {
    console.log("guessed the wrong number");
}
