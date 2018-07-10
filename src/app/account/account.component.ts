import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Account } from './account';
import { Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: []
})
export class AccountComponent implements OnInit {
  nameChangeAllowed = true;

  @Input() account: Account;
  @Output() nameChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onNameChange() {
    this.account.registrationName = 'New Name';
    this.nameChangeAllowed = false;

    this.nameChanged.emit(true);
  }
}
