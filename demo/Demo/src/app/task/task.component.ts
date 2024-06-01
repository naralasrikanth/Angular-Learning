import { Component, Input } from '@angular/core';
import { title } from 'process';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './tasks/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() name!:string;
  @Input() userId!:string;
  isAddingTask=false;
 

 constructor(private  taskService : TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }
  onCancelAddTask(){
    this.isAddingTask=false;
  }
  onCompleteTask(id:string){
    // this.tasks = this.tasks.filter((task) => task.id !==id);
    this.taskService.removeTask(id);
  }
  onAddTask(taskData : NewTaskData) {
    this.isAddingTask = false;
  }


}
