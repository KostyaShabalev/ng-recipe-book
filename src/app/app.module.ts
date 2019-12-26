import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { AuthModule } from './auth/auth.module';
// import { SharedeModule } from './shared/shared.module';
// import { RecipesModule } from './recipes/recipes.module';
// import { CoreModule } from './core/core.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './core/header/header.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    PageNotFoundComponent,
    DropdownDirective,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CoreModule,
    // AuthModule,
    // SharedeModule,
    // RecipesModule,
    // ShoppingListModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
