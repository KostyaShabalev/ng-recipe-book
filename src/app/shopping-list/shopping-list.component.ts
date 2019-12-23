import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    public ingredients: Ingredient[];

    private ingredientsChangeSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientsChangeSubscription = this.shoppingListService.ingredientsChanged
            .subscribe(
                (ingredients: Ingredient[]) => {
                    this.ingredients = ingredients;
                }
            );
    }

    ngOnDestroy(): void {
        this.ingredientsChangeSubscription.unsubscribe();
    }
}
