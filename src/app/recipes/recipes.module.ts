import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {SharedeModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
    declarations: [
      RecipeStartComponent,
      RecipeListComponent,
      RecipeEditComponent,
      RecipeDetailComponent,
      RecipesComponent,
      RecipeItemComponent
    ],
    imports: [
      SharedeModule,
      ReactiveFormsModule,
      RouterModule,
      RecipesRoutingModule
    ]
})
export class RecipesModule {}
