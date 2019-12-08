import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
    declarations: [RecipeStartComponent, RecipeListComponent, RecipeEditComponent, RecipeDetailComponent],
    exports: []
})
export class RecipesModule {}
