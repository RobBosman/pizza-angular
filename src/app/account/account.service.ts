import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accountsUrl = './assets/accounts.json';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  _getAccounts(): Observable<Account[]> {
    return this.http.get(this.accountsUrl)
      .pipe(
        map((response) => <Account[]>response,
          error => console.log(error)
        )
      );
  }
}

