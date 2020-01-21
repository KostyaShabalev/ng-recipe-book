import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    constructor(
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.dataStorageService.fetchRecipes().subscribe(); // TODO: find out whether there is a need in unsubscribe method in this case
    }
}
