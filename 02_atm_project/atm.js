const promptSync = require("prompt-sync")();
let userInputId = promptSync("User Id: ");
let userInputPin = parseInt(promptSync("Pin: "));
let userInputtransaction;
if (userInputId == "hamza123" && userInputPin == 2023) {
    userInputtransaction = promptSync("Enter money for transaction: ");
    let totalBalance = 50000;
    if (totalBalance == 50000 && userInputtransaction <= 50000) {
        console.log(`Transaction successful: ${userInputtransaction}`);
        console.log(`Total Balance before transaction: ${totalBalance}`);
        let balanceAfterTransaction = 50000 - userInputtransaction;
        console.log(`After transaction your balance is ${balanceAfterTransaction}`);
    }
    else {
        console.log(`Your balance is ${totalBalance} less than ${userInputtransaction}`);
    }
}
else {
    console.log("You user id & pin is incorrect");
}
export {};
