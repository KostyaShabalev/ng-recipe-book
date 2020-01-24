import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    public isAddIngredientFormActive = false;
    public ingredientForm: FormGroup;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.initForm();
        this.ingredientsSubscription = this.shoppingListService
            .getIngredientsFromRecipes()
            .subscribe(unfilteredIngredients => {
                this.fillIngredientsArrayWithUniqeItems(unfilteredIngredients);
            });
    }

    public onIncreaseIngredient(index): void {
        this.ingredients[index].amount++;
    }

    public onDecreaseIngredient(index): void {
        this.ingredients[index].amount--;
    }

    public onAddIngredient(): void {
        this.isAddIngredientFormActive = true;
    }

    public onDeleteIngredient(index): void {
        this.ingredients.splice(index, 1);
    }

    public onSubmitForm(): void {
        this.ingredients.push(this.ingredientForm.value);
        this.isAddIngredientFormActive = false;
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

    private initForm(): void {
        this.ingredientForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        });
    }
}
