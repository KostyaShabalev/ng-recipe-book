import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';
import { EmailLoginComponent } from './email-login/email-login.component';

import { GoogleSigninDirective } from './directives/google-signin.directive';

const components = [
  AuthComponent,
  EmailLoginComponent
];

const modules = [
  CommonModule,
  SharedModule
];

@NgModule({
  declarations: [...components, GoogleSigninDirective],
  imports: [...modules]
})
export class AuthModule { }
