import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes: Recipe[] = this.recipeService.getRecipes();
        this.http
            .put(
                'https://ng-recipe-book-10ad4.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        this.http
            .get<Recipe[]>('https://ng-recipe-book-10ad4.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients || []
                        };
                    });
                })
            )
            .subscribe(recipes => {
                this.recipeService.setRecipes(recipes);
            });
    }
}