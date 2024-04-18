import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DynamicPortfolioComponent } from './dynamic-portfolio/dynamic-portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionsComponent } from './sections/sections.component';
import { BuildPersonalPortfolioComponent } from './build-personal-portfolio/build-personal-portfolio.component';
import { BuildBusinessPortfolioComponent } from './build-business-portfolio/build-business-portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DynamicPortfolioComponent,
    SectionsComponent,
    BuildPersonalPortfolioComponent,
    BuildBusinessPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
