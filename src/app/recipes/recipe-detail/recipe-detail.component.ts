import { Component, Input, OnDestroy } from '@angular/core';

import { Recipe } from './../../shared/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnDestroy {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnDestroy() {
    console.log(123);
    
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
