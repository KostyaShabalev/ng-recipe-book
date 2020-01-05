import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

// const components = [];

const modules = [
    CommonModule,
    MaterialModule,
    LayoutModule
];

@NgModule({
    // declarations: [...components],
    imports: [...modules],
    exports: [
        // ...components,
        ...modules
    ]
})
export class SharedModule {}
