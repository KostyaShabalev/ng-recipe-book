import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
    // TODO: add possibility of image download
    public id: number;
    public isEditMode = false;
    public recipeForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) {
    }

    ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params.id;
                this.isEditMode = params.id !== null;
                this.initForm();
            }
        );
    }

    get ingredientControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    public onSubmit() {
        console.log(this.recipeForm);
    }

    private initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new FormArray([]);

        if (this.isEditMode) {
            const recipe = this.recipeService.getSingleRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;

            if (recipe.ingredients) {
                recipe.ingredients.forEach(ingredient => {
                    recipeIngredients.push(
                        new FormGroup({
                            name: new FormControl((ingredient.name)),
                            amount: new FormControl(ingredient.amount)
                        })
                    );
                });
            }
        }

        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName),
            imagePath: new FormControl(recipeImagePath),
            description: new FormControl(recipeDescription),
            ingredients: recipeIngredients
        });
    }

}
