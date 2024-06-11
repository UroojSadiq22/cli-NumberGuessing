#! /user/bin/env node
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([
    {
        name: 'useerGuessedNumber',
        type: 'number',
        message: 'please guess a number between 1-6'
    }
]);
if (answer.useerGuessedNumber == randomNumber) {
    console.log(`${randomNumber} == ${answer.useerGuessedNumber} , Congragulations! you guessed a right number.`);
}
else {
    console.log(`${randomNumber} ==! ${answer.useerGuessedNumber} , Sorry! you guess a wrong number. Try again next time.`);
}
