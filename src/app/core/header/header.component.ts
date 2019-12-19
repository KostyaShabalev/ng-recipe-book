import { Component } from '@angular/core';
import { DataStorageService } from './../../shared/services/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService) {}

    public onSaveRecipes() {
        this.dataStorageService.storeRecipes();
    }

    public onFetchRecipes() {
        this.dataStorageService.fetchRecipes();
    }

}
