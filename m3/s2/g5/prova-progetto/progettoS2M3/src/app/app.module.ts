import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [FormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
