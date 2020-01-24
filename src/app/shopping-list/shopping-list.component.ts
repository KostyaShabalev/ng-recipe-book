import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './services/shopping-list.service';
import { Ingredient } from './../shared/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    public ingredients: Ingredient[] = [];
    public ingredientsSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredientsSubscription = this.shoppingListService
            .getIngredientsFromRecipes()
            .subscribe(unfilteredIngredients => {
                this.fillIngredientsArrayWithUniqeItems(unfilteredIngredients);
            });
    }

    public onIncreaseIngredient(index) {
        this.ingredients[index].amount++;
    }

    public onDecreaseIngredient(index) {
        this.ingredients[index].amount--;
    }

    public onAddIngredient() {

    }

    public onDeleteIngredient(index) {
        this.ingredients.splice(index, 1);
    }

    private fillIngredientsArrayWithUniqeItems(unfilteredIngredients: Ingredient[]): void {
        unfilteredIngredients.forEach(unfilteredIngredient => {
            let duplicatedIngredient = this.ingredients.find(
                ingredient => ingredient.name === unfilteredIngredient.name
            );

            if (duplicatedIngredient) {
                duplicatedIngredient.amount += unfilteredIngredient.amount;
            } else {
                this.ingredients.push(unfilteredIngredient);
            }
        });
    }
}
