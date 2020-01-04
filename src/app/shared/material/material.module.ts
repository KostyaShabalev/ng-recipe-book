import { NgModule } from '@angular/core';

import {
    MatButtonModule
} from '@angular/material';

const materialModules = [
    MatButtonModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})
export class MaterialModule {}