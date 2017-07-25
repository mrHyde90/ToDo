import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskslistComponent } from './taskslist/taskslist.component';
//import {TasksService} from './tasks.service';
import { TasknewComponent } from './tasknew/tasknew.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskslistComponent,
    TasknewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
