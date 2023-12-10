import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabellaComponent } from "./components/tabella/tabella.component";
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TabellaComponent]
})

export class AppComponent {
  title = 'progettoS2M3';
}
