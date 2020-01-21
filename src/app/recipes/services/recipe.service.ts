import {BehaviorSubject} from 'rxjs';

import {Recipe} from '../../shared/models/recipe.model';

export class RecipeService {
    public updatedRecipeList = new BehaviorSubject<Recipe[]>([]);

    private recipes: Recipe[] = [];

    public setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.updateRecipeList();
    }

    public getSingleRecipe(index: number) {
        return this.recipes[index]; // TODO: maybe it would be better to search by id
    }

    public addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.updateRecipeList();
    }

    public updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.updateRecipeList();
    }

    public deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.updateRecipeList();
    }

    private updateRecipeList() {
        this.updatedRecipeList.next(this.recipes.slice());
    }
}
