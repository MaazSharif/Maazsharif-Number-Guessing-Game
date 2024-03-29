#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() *7 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please choose the correct number between 1-10",
    },
])
if (answer.userGuessNumber === randomnumber) {
    console.log("Congratulations! You guessed the right number" )
}else  {
    console.log("You guessed the wrong number");
}