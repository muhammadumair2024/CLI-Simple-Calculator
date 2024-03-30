#! /usr/bin/env node
import inquirer from "inquirer";

let loop = true;

while(loop){

const UserInput = await inquirer.prompt([
{
    type: "number",
    name: "num1",
    message: "Enter First Number"

},
{
    type:'number',
    name: "num2",
    message: "Enter Second Number"
},
{
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
    message: "Select the Operator"
}
]);

const num1 = UserInput.num1;
const num2 = UserInput.num2;
const operator = UserInput.operator;
//console.log(num1, num2, operator);

// now we use some condition here

if(num1 && num2){
    
    if(operator  === "Addition"){
     console.log(`\nThe answer of ${num1} + ${num2} = ${num1 + num2}`);
    
    }else if(operator ==="Subtraction"){
        console.log(`\nthe answer of ${num1} - ${num2} = ${num1 - num2}`)
    
    }else if(operator ==="Multiplication"){
        console.log(`\nthe answer of ${num1} * ${num2} = ${num1 * num2}`)

    }
}else if(operator ==="Division"){
    console.log(`\nthe answer of ${num1} / ${num2} = ${num1 / num2}`)
}else{

 console.log(`please enter a valid number`)
}

const calculateMore = await inquirer.prompt({
    type: "confirm",
    name: "more",
    message: " Do you want more calculations?",
    default: false    //if user do not say yes or no
});

if(!calculateMore.more){
    loop = false;
    console.log(`\nmake a first cli calculator with inquirer libery`)
}
}
// for some advance features watch the video
// extra features include if user want more then one calculation at same time
