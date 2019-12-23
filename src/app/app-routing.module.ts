import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
