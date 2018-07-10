import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styles: []
})
export class AccountListComponent implements OnInit {

  selectedAccount: Account;
  nameChangeCount = 0;
  accounts: Account[];

  constructor(private service: AccountService) { }

  ngOnInit() {
    this.service.getAccounts().subscribe(
      (data) => this.accounts = data
    );
  }

  onSelectAccount(account: Account) {
    this.selectedAccount = account;
  }

  onNameChange(nameChanged: boolean) {
    if (nameChanged) {
      this.nameChangeCount++;
    }
  }

}
