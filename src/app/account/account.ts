export class Account {
  accountNumber: string;
  registrationName: string;
  balance = 123.12;

  constructor(accountNumber: string, registrationName: string) {
    this.accountNumber = accountNumber;
    this.registrationName = registrationName;
  }
}
