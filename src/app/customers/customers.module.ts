import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-listcomponents';
import { FilterTextboxComponent } from './customers-list/filter-textboxcomponent';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  exports: [ CustomersComponent]
})
export class CustomersModule { }