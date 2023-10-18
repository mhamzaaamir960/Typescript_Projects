import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import promptSync from "prompt-sync";
import showBanner from "node-banner";
const prompt = promptSync();
async function show_banner() {
    return await new Promise((res) => {
        showBanner(`Number Guessing Game`);
        setTimeout(res, 1000);
    });
}
;
await show_banner();
async function set_time() {
    return await new Promise((show) => {
        setTimeout(show, 2600);
    });
}
let user_name;
async function welcome_text() {
    user_name = prompt(chalk.magentaBright(`What is your name?  `));
    let rainbow_text = chalkAnimation.karaoke(`\nWelcome ${chalk.italic(user_name)} to number guessing game! \n`, 2);
    await set_time();
    //rainbow_text.stop();
}
await welcome_text();
async function number_guess_game() {
    console.log(chalk.grey.italic(`=> You have 3 chances (rounds) to guess the number. If you guess the correct number
   in one round you earn 10 points`));
    let rounds = ["Round-1", "Round-2", "Round-3"];
    let earned_points = 0;
    for (let a = 0; a < rounds.length; a++) {
        console.log(chalk.inverse.magentaBright(`\n <<<<<<<<<<  ${(rounds[a])} >>>>>>>>>> \n`));
        let random_number = Math.round(Math.random() * 5);
        let user_input = parseInt(prompt(chalk.blueBright.bold("Enter any number between 0 and 5: ")));
        if (random_number === user_input) {
            console.log(chalk.green(`Good luck! ${chalk.italic(`your guessed number ${(user_input)} is correct => ${chalk.yellow(random_number)}`)}`));
            earned_points += 10;
        }
        else {
            console.log(chalk.red(`Bad luck! ${chalk.italic(`your guessed number ${(user_input)} is wrong ≠ ${chalk.yellow(random_number)}`)}`));
        }
        ;
    }
    ;
    console.log(chalk.yellowBright.bold.bgWhite(`\nYou earned ${earned_points} points\n`));
}
;
{
    let again;
    do {
        await number_guess_game();
        again = await inquirer.prompt([
            {
                name: 'restart',
                type: 'string',
                message: chalk.yellow('Do you want to restart again? (yes/no) '),
            }
        ]);
    } while (again.restart === "yes" || again.restart === "Yes" || again.restart === "YES");
    if (again.restart !== "yes" || again.restart !== "Yes" || again.restart !== "YES") {
        console.log(chalk.green.bold(`\nThanks ${chalk.italic(user_name)}, for playing this game\n`));
    }
}
;
