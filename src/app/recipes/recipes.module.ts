import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

const components = [
    RecipesComponent
];

const modules = [
    SharedModule,
    RecipesRoutingModule,
    RouterModule
];

@NgModule({
    declarations: [...components, RecipeListComponent, RecipeEditComponent, RecipeDetailComponent, RecipeItemComponent],
    imports: [...modules]
})
export class ReipesModule {}
