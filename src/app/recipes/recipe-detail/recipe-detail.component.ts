import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { Recipe } from './../../shared/models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

    public recipe: Recipe;

    private recipeIndex: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.recipeIndex = +params.id; // TODO: add unique id to recipe (in DB)
                this.recipe = this.recipeService.getSingleRecipe(this.recipeIndex);
            }
        );
    }

    public onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    public onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.recipeIndex);
        this.router.navigate(['/recipes']);
    }

}
