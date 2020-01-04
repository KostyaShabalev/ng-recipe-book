import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [];

const modules = [
    CommonModule,
    MaterialModule
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