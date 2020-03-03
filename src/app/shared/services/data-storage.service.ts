import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "../../recipes/services/recipe.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
    ) {}

    public fetchRecipes(): Observable<Recipe[]> {
        return this.http
            .get<Recipe[]>(`${environment.firebase.databaseURL}/recipes.json`)
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients
                                ? recipe.ingredients
                                : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}
