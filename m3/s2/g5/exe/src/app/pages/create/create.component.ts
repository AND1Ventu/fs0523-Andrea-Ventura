import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(
    private todoSvc:TodoService,
    private router:Router
    ){}

  newTodo:Partial<Todo> = {
    active:'0'
  };

  oldTodo:Todo|null = null;

  loading:boolean = false;

  save(){
    this.loading = true;

    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.oldTodo = res;
      this.newTodo = {
        active:'0'
      }

      // setTimeout(()=>{
      //   this.router.navigate(['/'])
      // },3000)
    })
  }

}
