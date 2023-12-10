import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../todo.service';
import { iTodo } from '../../Models/todo';

@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {

  todosArr:iTodo[] = [];

  constructor(private TodoSvc: TodoService){}

  ngOnInit(){
    this.todosArr = this.TodoSvc.getAll()
  }

}
