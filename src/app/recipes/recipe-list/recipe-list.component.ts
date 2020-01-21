import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    public recipes: Recipe[];
    public recipesSubscription: Subscription;

    constructor(
        private recipeService: RecipeService
    ) { }

    ngOnInit(): void {
        this.recipesSubscription = this.recipeService.updatedRecipesList
            .subscribe((recipes: Recipe[]) => {
                this.recipes = recipes;
            });
    }

    ngOnDestroy(): void {
        this.recipesSubscription.unsubscribe();
    }

}
