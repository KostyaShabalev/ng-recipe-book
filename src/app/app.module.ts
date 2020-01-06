import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ShellComponent } from './core/shell/shell.component';

const components = [
  AppComponent,
  ShellComponent
];

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  SharedModule,
  CoreModule
];


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
