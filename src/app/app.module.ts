import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedRecipesComponent } from './components/saved-recipes/saved-recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { LogInComponent } from './components/authentication/log-in/log-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalRecipeDetailComponent } from './components/personal-recipe-detail/personal-recipe-detail.component';
import { PersonalRecipesComponent } from './components/personal-recipes/personal-recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFeedComponent } from './components/recipe-feed/recipe-feed.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SavedRecipesComponent,
    EditRecipeComponent,
    AddRecipeComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    PersonalRecipeDetailComponent,
    PersonalRecipesComponent,
    RecipeDetailsComponent,
    RecipeFeedComponent,
    RecipeSearchComponent,
    ReviewFormComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
