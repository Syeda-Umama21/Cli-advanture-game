#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

// Classes Player & Opponent
class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;

    }
    // Method to decrease fuel
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    // Method to restore fuel to 100
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;

    }
    // Method to restore fuel to 100
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    
}

// Welcoming message
console.log(chalk.bold.rgb(249, 224, 81 
)(`      
    <<<===========================================================================>>>
                              W E L C O M E    T O    T H E
                                   A D V E N T U R  G A M E
    <<===========================================================================>>`));

// Prompt the player to enter their name
let player = await inquirer.prompt (
    {
        type: "input",
        name: "name",
        message: chalk.bold.rgb(123, 250, 224)("Please Enter Your Name:"),
        validate: (ans)=> {
            if (!ans) {
                return "Please give Your answer";
            }
            return true;
        }
    }
);
// Prompt the player to select an opponent
let opponent = await inquirer.prompt(
    {
        type: "list",
        name: "select",
        message: chalk.rgb(191, 241, 104 )("Select Your Opponent"),
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
);
// Create instances of Player and Opponent with gathered data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    // Handle the case when the opponent is Skeleton
    if (opponent.select == "Skeleton") {

    let ask = await inquirer.prompt(
        {
            type: "list",
            name: "opt",
            message: chalk.bold.rgb(253, 229, 119)("Select Your Opponent"),
            choices: ["Attack", "Drink portion", "Run FOr Your Life.."]
        }
    )
    // If player chooses to attack
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2)
        if (num > 0) { // Player gets attacked
            p1.fuelDecrease();
            console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold("You Loose :( , Butter Luck Next time!"));
                process.exit();
        }
    }
        if (num <= 0) { // Opponent gets attacked
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
             if (o1.fuel <= 0) {
                console.log(chalk.green.bold("You Win :)"));
                process.exit();
        }
    }
}
// If player chooses to drink potion
    if (ask.opt == "Drink portion") {
        p1.fuelIncrease()
        console.log(chalk.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        
    }
 // If player chooses to run
    if (ask.opt == "Run FOr Your Life..") {
        console.log(chalk.red.bold("You Loose :( , Butter Luck Next time!"));
        process.exit();

    }
}
// Handle the case when the opponent is Assassin
      if (opponent.select == "Assassin") {

        let ask = await inquirer.prompt(
            {
                type: "list",
                name: "opt",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink portion", "Run FOr Your Life.."]
            }
        )
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) { // Player gets attacked
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("You Loose :( , Butter Luck Next time!"));
                    process.exit();
                }
            }
            if (num <= 0) { // Opponent gets attacked
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                 if (o1.fuel <= 0) {
                    console.log(chalk.green.bold("You Win :)"));
                    process.exit();
                }
            }
    }
// If player chooses to drink potion
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
            
        }
      // If player chooses to run
        if (ask.opt == "Run FOr Your Life..") {
            console.log(chalk.red.bold("You Loose :( , Butter Luck Next time!"));
            process.exit();
        }
    
    }
 // Handle the case when the opponent is Zombie
 if (opponent.select == "Zombie") {

    let ask = await inquirer.prompt(
        {
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run FOr Your Life.."]
        }
    )
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2)
        if (num > 0) { // Player gets attacked
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold("You Loose :( , Butter Luck Next time!"));
                process.exit();
            }
        }
        if (num <= 0) { // Opponent gets attacked
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
             if (o1.fuel <= 0) {
                console.log(chalk.green.bold("You Win :)"));
                process.exit();
             }
        }
}
 // If player chooses to drink potion
    if (ask.opt == "Drink portion") {
        p1.fuelIncrease()
        console.log(chalk.bold.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        
    }
  // If player chooses to run
    if (ask.opt == "Run FOr Your Life..") {
        console.log(chalk.red.bold("You Loose :( , Butter Luck Next time!"));
        process.exit();
    }

}
}
while(true)  // Infinite loop to keep the game running



