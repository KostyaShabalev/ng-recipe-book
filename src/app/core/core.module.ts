import { NgModule } from '@angular/core';
import {RecipeService} from '../recipes/services/recipe.service';

const components = [];
const modules = [];
const services = [RecipeService];

@NgModule({
    declarations: [...components],
    providers: [...services],
    imports: [...modules],
    exports: [
        ...components,
        ...modules
    ]
})
export class CoreModule {}
