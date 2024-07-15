import inquirer from "inquirer";
//1. computer will generate a random number
//2. user input for guessing number
//3. compare user input with computer generated number and show result



const randomNumber = Math.floor(Math.random () * 10 + 1 );
//random 0 se 1 tk ki value ko guess krta hai to point main value hogi .
//Value ko round off krne k lye math.floor use krte hain to mostly value zero hi ayegi.
// value zero na aye is k lye isko 10 se multiply karain ge to value 0 to 9 ayegi ( jo value likhain ge us se ek value kam hi ayegi)
// if we want k value zero na aye to ()*10 main add (+ 1 )karain ge.
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (answers.userGuessNumber ===randomNumber){
    console.log("Congratulations! you guessed right number");
}else {
    console.log("You guessed wronged number");
    
}