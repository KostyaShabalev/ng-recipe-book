import { BehaviorSubject } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Injectable } from '@angular/core';
import { RecipeService } from './../../recipes/services/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    // public updatedIngredients: new BehaviorSubject<Ingredient>([]);

    constructor(
        private recipeService: RecipeService
    ) {}

    public getIngredients() {
        this.recipeService.updatedRecipeList
            .subscribe(recipes => {
                console.log(recipes);
            });
    }
}