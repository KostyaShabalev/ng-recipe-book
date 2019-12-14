import { Component, Input } from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  public onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
