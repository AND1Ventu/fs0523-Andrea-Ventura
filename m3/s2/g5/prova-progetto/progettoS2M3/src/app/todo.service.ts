import { Injectable } from '@angular/core';
import { iTodo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todosArr: iTodo[] = [
    {
      id:0,
      title: 'subscribe to shopify',
      completed: false,
    }
  ];

  getAll(){
    return this.todosArr
  }

}
