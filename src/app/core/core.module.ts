import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    exports: [
        HomeComponent,
        HeaderComponent
    ]
})
export class CoreModule {}
