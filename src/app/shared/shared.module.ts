import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
// Modules
import { MaterialModule } from './material/material.module';
// Components
import { ShellComponent } from './shell/shell.component';
import {HttpClientModule} from '@angular/common/http';

const components = [
    ShellComponent
];

const modules = [
    CommonModule,
    MaterialModule,
    LayoutModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule
];

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [
        ...components,
        ...modules
    ]
})
export class SharedModule {}
