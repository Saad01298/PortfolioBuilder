import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DynamicPortfolioComponent } from './dynamic-portfolio/dynamic-portfolio.component';
import { BuildPortfolioComponent } from './build-portfolio/build-portfolio.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'buildPortfolio', component: BuildPortfolioComponent, canActivate: [AuthGuard]},
  {path: 'portfolio/:id', component: DynamicPortfolioComponent},
  // {path: 'invalidPortfolio'}
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { 
    path: '**', 
    redirectTo: 'login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
