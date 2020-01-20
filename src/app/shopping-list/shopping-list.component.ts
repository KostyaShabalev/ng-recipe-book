import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './services/shopping-list.service';
import { Ingredient } from './../shared/models/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    public ingredients: Ingredient[];

    constructor(
        private shoppingListService: ShoppingListService
    ) {}

    ngOnInit() {
        this.shoppingListService.getIngredients();
    }
}
