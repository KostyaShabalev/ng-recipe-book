import { NgModule } from '@angular/core';

const components = [];
const modules = [];
const services = [];

@NgModule({
    declarations: [...components],
    providers: [...services],
    imports: [...modules],
    exports: [
        ...components,
        ...modules
    ]
})
export class CoreModule {}
