import { Component, OnInit } from "@angular/core"
import { ICustomer } from "src/app/shared/interfaces";

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-listcomponent.html'
})
export class CustomersListComponent implements OnInit {
    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD'

    constructor() {}

    ngOnInit() {
    }
}