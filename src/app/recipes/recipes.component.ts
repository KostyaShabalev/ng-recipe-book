import { Component } from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
    constructor(private dataStorageService: DataStorageService) {
        this.dataStorageService.fetchRecipes(); // TODO: remove
    }
}
