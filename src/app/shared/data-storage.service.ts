import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
	private baseUrl: string = 'https://ng-recipe-book-10ad4.firebaseio.com/';
  constructor(
		private http: HttpClient,
    private recipeService: RecipeService,
  	private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
		
		return this.http.put(`${this.baseUrl}/recipes.json`, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
		this.http.get(`${this.baseUrl}/recipes.json?auth=${token}`)
			.pipe(
				map(
					(response: any) => {
						for (let recipe of response) {
							if (!recipe['ingredients']) {
								recipe['ingredients'] = [];
							}
						}
						return response;
					}
				)
			)
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
