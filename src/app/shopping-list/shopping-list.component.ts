import { Component, OnInit } from "@angular/core";

import { ShoppingListService } from "./services/shopping-list.service";
import { Ingredient } from "./../shared/models/ingredient.model";
import { Subscription } from "rxjs";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
    public ingredients: Ingredient[];
    // public ingredientsSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.shoppingListService
            .getIngredientsFromRecipes()
            .subscribe(unfilteredIngredients => {
                let filteredIngredients: Ingredient[] = [];

                unfilteredIngredients.forEach(ingredient => {
                   console.log(filteredIngredients.find(filteredIngredient => filteredIngredient.name === ingredient.name));
                });
            });
    }
}
