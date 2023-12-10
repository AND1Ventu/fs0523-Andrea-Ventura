import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './pages/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateComponent,
    EditComponent,
    HeaderComponent,
    Page404Component,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
