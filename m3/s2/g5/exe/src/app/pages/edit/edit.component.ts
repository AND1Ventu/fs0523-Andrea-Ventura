import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../todo.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(
    private route: ActivatedRoute,//per ottenere dati sulla rotta attiva
    private todoSvc:TodoService
    ){}

    todo!:Todo;

  ngOnInit(){
    //usa questo per leggere il parametro id nell'url
    this.route.params.subscribe((params:any) => {

      this.todoSvc.getById(params.id).then(res => this.todo = res)

    })

  }

  save(){
    this.todoSvc.update(this.todo).then( res => {

    })
  }
}
