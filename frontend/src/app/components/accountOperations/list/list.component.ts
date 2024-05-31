import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountOperationService } from '../../../services/accountOperation.service';
import { AccountOperationModel } from '../../../models/accountOperation.model';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {

  public accountOperations?: AccountOperationModel[];

  public constructor(
    private title: Title,
    private accountOperationService: AccountOperationService,
    private activatedRoute: ActivatedRoute
  ) { }

  public async ngOnInit() {

    this.title.setTitle('NG Bank Account Operations');
    const accountNumber = this.activatedRoute.snapshot.paramMap.get('accountNumber');
    if (accountNumber) {
      this.accountOperations = await this.accountOperationService.getAll(+accountNumber);
    }
  }


}
