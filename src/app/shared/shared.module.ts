import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AlertComponent} from './components/alert/alert.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {DropdownDirective} from './directives/dropdown.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    PageNotFoundComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule,
    FormsModule
  ]
})
export class SharedeModule {}
