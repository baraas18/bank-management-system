import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
    public tooltip = "Enter Account Number"
    public query?: string;

    public constructor(
        private router: Router
    ) { }

    public search() {
        if (this.query) this.router.navigateByUrl(`/accountOperations/${+this.query}`);
    }

    ngOnInit(): void {
        this.query = 'Example: 123456789'
    }
}
