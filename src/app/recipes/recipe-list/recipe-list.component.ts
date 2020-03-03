import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

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
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    public ngOnInit(): void {
        this.recipesSubscription = this.recipeService.updatedRecipeList
        .subscribe((recipes: Recipe[]) => {
            this.recipes = recipes;
        });
    }

    public ngOnDestroy(): void {
        this.recipesSubscription.unsubscribe();
    }

    public onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

}
