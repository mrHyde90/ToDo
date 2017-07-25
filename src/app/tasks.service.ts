import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
tasks;
cont;
  constructor() {
    this.tasks = [{title: "first task", completed: true},
     {title: "second task", completed: false},
     {title: "third task", completed: false}];
     this.cont = 2;
  }

  addTask(task){
    this.cont += 1;
    this.tasks.push(task);
    console.log(this.tasks[this.cont].title)
  }
}
