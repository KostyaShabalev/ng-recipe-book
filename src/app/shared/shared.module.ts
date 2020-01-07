import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
// Modules
import { MaterialModule } from './material/material.module';
// Components
import { ShellComponent } from './shell/shell.component';

const components = [
    ShellComponent
];

const modules = [
    CommonModule,
    MaterialModule,
    LayoutModule,
    RouterModule
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
