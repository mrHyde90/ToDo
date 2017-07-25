import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasknew',
  providers: [TasksService],
  templateUrl: './tasknew.component.html',
  styleUrls: ['./tasknew.component.css']
})
export class TasknewComponent implements OnInit {
task;
  constructor(public tasksService: TasksService) {
    this.task = {title: "", completed: false};
   }

  ngOnInit() {
  }
onSubmit(){
  this.tasksService.addTask(this.task);
  this.task = {title: "", completed: false};
}

}
