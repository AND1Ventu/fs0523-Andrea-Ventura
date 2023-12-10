import { iTodo } from "./iTodo";

export class Todo implements iTodo {
  constructor(
    public title: string,
    public id: number,
    public completed: boolean) { }
}
