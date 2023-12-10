import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  todos:Todo[] = [];

  constructor(private todoSvc:TodoService){}

  ngOnInit(){
    this.todoSvc.getAll().then(todos => this.todos = todos)
  }

  delete(id:string|undefined){
    if(!id) return //blocca la funzione

    this.todoSvc.delete(id).then(res => {

      this.todos =  this.todos.filter(p => p.id != id);

       alert(`todo con id ${id} eliminato`)
    })
  }
}
