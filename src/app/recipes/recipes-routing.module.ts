import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';

const routes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        // TODO: add canActivate
        children: [
            {}
        ]
    }
];

@NgModule({})
export class RecipesRoutingModule {}
