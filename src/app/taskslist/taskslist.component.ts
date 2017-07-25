import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-taskslist',
  providers: [TasksService],
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
  }

  completeTask(task){
    task.completed = true;
    console.log(task.completed);
  }
}
