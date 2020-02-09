import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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
        private recipeService: RecipeService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params.id;
                this.isEditMode = !!params.id;
                this.initForm();
            }
        );
    }

    get ingredientControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    public onSubmit() {
        if (this.isEditMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }

        this.router.navigate(['../'], {relativeTo: this.route});
    }

    public onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    public onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                name: new FormControl(null, Validators.required),
                amount: new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
        );
    }

    public onDeleteIngredient(index) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
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
                            name: new FormControl((ingredient.name), Validators.required),
                            amount: new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        })
                    );
                });
            }
        }

        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName, Validators.required),
            imagePath: new FormControl(recipeImagePath, Validators.required),
            description: new FormControl(recipeDescription, Validators.required),
            ingredients: recipeIngredients
        });
    }
}
