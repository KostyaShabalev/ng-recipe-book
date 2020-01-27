import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';
import { EmailLoginComponent } from './email-login/email-login.component';

const components = [
  AuthComponent,
  EmailLoginComponent
];

const modules = [
  CommonModule,
  SharedModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class AuthModule { }
