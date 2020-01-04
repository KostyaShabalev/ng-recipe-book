import { NgModule } from '@angular/core';

import {
    MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule
} from '@angular/material';

const materialModules = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})
export class MaterialModule {}