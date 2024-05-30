#! usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a randon number - done

// 2) user input for guessing number -Done

// 3) compare user input with computer generate number and show number - Don





const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please guess a number between 1-10"
    }
])
if(answers.userGussedNumber === randomNumber){
    console.log("Congtratulation! you gussed right number.")
} else{
    console.log("You gussed wrong number")
}
