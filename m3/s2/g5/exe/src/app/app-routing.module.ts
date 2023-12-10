import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { CreateComponent } from './pages/create/create.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo : '/menu'
  },
  {
    path:'menu',
    component: MenuComponent,
    children:[
      {
        path:'',// "/menu"
        component:ListaComponent
      },
      {
        path: 'edit/:id',// "/menu/edit/:id"
        component: EditComponent
      },
      {
        path:'crea-todo',// "/menu/crea-todo"
        component: CreateComponent
      }
    ]
  },
  {
    path:'**',//è la pagina non found
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
