import { Injectable } from '@angular/core';
import { AccountOperationModel } from '../models/accountOperation.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountOperationService {

  constructor(private httpClient: HttpClient) { }

  public test(): number {
    return 123;
  }

  public async getAll(accountNumber: number): Promise<AccountOperationModel[]> {
    const observable = this.httpClient.get<AccountOperationModel[]>(`${environment.accountOperationsURL}/${accountNumber}`);
    const accountOperations = await firstValueFrom(observable);
    return accountOperations;
  }


  public async add(accountOperation: AccountOperationModel): Promise<AccountOperationModel> {

    const observable = this.httpClient.post<AccountOperationModel>(environment.accountOperationsURL, accountOperation);
    const newAccountOperation = await firstValueFrom(observable);
    return newAccountOperation;
  }



}
