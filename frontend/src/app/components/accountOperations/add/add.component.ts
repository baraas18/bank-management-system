import { Component } from '@angular/core';
import { AccountOperationModel } from '../../../models/accountOperation.model';
import { FormsModule } from '@angular/forms';
import { AccountOperationService } from '../../../services/accountOperation.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-add',
    standalone: true,
    imports: [FormsModule, NgIf],
    templateUrl: './add.component.html',
    styleUrl: './add.component.css'
})
export class AddComponent {
    public constructor(
        private accountOperationService: AccountOperationService,
        private router: Router
    ) { }

    public accountOperation = new AccountOperationModel();

    public async submitForm() {
        console.log(this.accountOperation)

        const newAccountOperation = await this.accountOperationService.add(this.accountOperation);
        alert(`added a new account operation with id ${newAccountOperation.id}`);
        this.router.navigateByUrl(`/accountOperations/${newAccountOperation.accountNumber}`);
    }
}
