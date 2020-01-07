import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';

const components = [
    RecipesComponent
];

const modules = [
    SharedModule,
    RecipesRoutingModule,
    RouterModule
];

@NgModule({
    declarations: [...components],
    imports: [...modules]
})
export class ReipesModule {}
