import { AuthInterceptorService } from './auth/services/auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from './../environments/environment';
// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
// Components
import { AppComponent } from './app.component';

const components = [
    AppComponent
];

const modules = [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReipesModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        ...modules
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
