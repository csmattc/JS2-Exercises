
// Classes, maps, exports and imports

// Arrow functions

export default class Account {

  constructor(name, balance){
    this.identifier = Account.nextNumber++;
    this.name = name;
    this.balance = balance;
  }

  deposit() {

  }
  withdraw() {

  }
  toString() {
    return "name: " + this.name + " " + "balance: " + this.balance + " Identifier: " + this.uniqueNumber; 
  }

}
Account.nextNumber = 1;


// Create a JavaScript file named account.js that exports a class named Account.
// The Account class constructor should accept a name and optional balance.
// Each Account object should be assigned a unique number.
// The Account class should specify deposit, withdraw, and toString methods.
// Create a JavaScript file named bank.js that exports a class named Bank.
// The Bank class constructor should initialise a Map of Account objects.
// The Bank class should specify the following methods:
// - openAccount(name, balance): number
// - getAccount(number): Account
// - closeAccount(number)
// - printAllToConsole()
// Create a JavaScript file named main.js that imports the Bank class.
// Add some code to test the Bank and Account classes thoroughly.
// Create a HTML page and embed the main.js script.
// Save your changes regularly throughout.

