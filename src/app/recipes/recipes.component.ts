import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
    private isAuthenticated = false;
    private recipesSubscription: Subscription;

    constructor(
        private dataStorageService: DataStorageService
    ) {}

    public ngOnInit(): void {
        this.recipesSubscription = this.dataStorageService.fetchRecipes()
            .subscribe();
    }

    public ngOnDestroy(): void {
        this.recipesSubscription.unsubscribe();
    }
}
