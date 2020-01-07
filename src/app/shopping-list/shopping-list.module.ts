import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Modules
import { SharedModule } from '../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
// Components
import { ShoppingListComponent } from './shopping-list.component';

const components = [
    ShoppingListComponent
];

const modules = [
    SharedModule,
    ShoppingListRoutingModule,
    RouterModule
];

@NgModule({
    declarations: [...components],
    imports: [...modules]
})
export class ShoppingListModule {}
