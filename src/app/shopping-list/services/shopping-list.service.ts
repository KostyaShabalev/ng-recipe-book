import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

import { RecipeService } from './../../recipes/services/recipe.service';
import {Recipe} from '../../shared/models/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    constructor(
        private recipeService: RecipeService
    ) {}

    public getIngredientsFromRecipes() {
        return this.recipeService.updatedRecipeList
            .pipe(
                map((recipes: Recipe[]) => {
                    // return recipes.map(recipe => recipe.ingredients);
                    return recipes;
                })
            );
    }

    // private packIngredientsIntoArray(recipes) {
    //     return recipes.map(recipe => {
    //         return ...recipe.ingredients;
    //     });
    // }
}
