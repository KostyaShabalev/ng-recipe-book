import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {Recipe} from '../models/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(
        private http: HttpClient
    ) {}

    public fetchRecipes() {
        return this.http.get<Recipe[]>(`${environment.firebase.databaseURL}/recipes.json`)
            .subscribe(result => {
                console.log(result);
            });
    }
}
