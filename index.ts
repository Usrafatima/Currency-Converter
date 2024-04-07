#!/usr/bin/env node
import inquirer from "inquirer";

const currency : any= {
    USD: 1, //base currency
    EUR: 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
    SAR : 73.99,
    JPY : 0.55,
};

let user_answer  = await inquirer.prompt(
 [
    {
    
    name : 'from',
    message: "Enter from currency",
    type:"list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR" ,"SAR", "JPY"], 
    },
    {
        name : 'to',
        message: "Enter to currency",
        type:"list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR","SAR", "JPY"],
    },
    {
        name : "amount",
        message: "Enter your amount ",
        type : "number",
    }
 ]    
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let basedAmount = amount / fromAmount //USD base currency 
let convertedAmount = basedAmount * toAmount
console.log(convertedAmount);

