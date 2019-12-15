import {
    Component,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
    // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
    // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
    public id: number;
    public editMode = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.editMode = params['id'] != null;
                }
            );
    }

    onAddItem() {
        // const ingName = this.nameInputRef.nativeElement.value;
        // const ingAmount = this.amountInputRef.nativeElement.value;
        // const newIngredient = new Ingredient(ingName, ingAmount);
        // this.slService.addIngredient(newIngredient);
    }

}
