import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    title: "Home || My Weather App"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login || My Weather App"
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: "Register || My Weather App"
  },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: 'favorites',
        component: FavoritesComponent
      }
    ]
  }//,
//  {
//    path:'**',
//    component: Page404Component
//  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
