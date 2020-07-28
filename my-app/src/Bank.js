import Account from './Account';
//The Bank class constructor should initialise a Map of Account objects.
// The Bank class should specify the following methods:
// - openAccount(name, balance): number
// - getAccount(number): Account
// - closeAccount(number)
// - printAllToConsole()
export default class Bank {
  constructor(){
    this.accounts = new Map();
  }

  openAccount(name, balance) {
    let account = new Account(name, balance);
    this.accounts.set(account.identifier, account);
    return account.identifier
  }

  getAccount(number) {
    return this.accounts.get(number);
  }

  closeAccount(number){
    return this.accounts.delete(number);
  }

  printAllToConsole(){
    this.accounts.forEach((k, v) => {
      console.log(k, v);
    });
  }
}
