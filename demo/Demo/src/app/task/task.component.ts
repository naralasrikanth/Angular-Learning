import { Component, Input } from '@angular/core';
import { title } from 'process';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

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

  tasks = [
    {
      id:'1',
      userId:'1',
      title:'Angular',
      summary:'Learn Angular and features',
      dueDate:'2024-02-29',

    },
    {
      id:'2',
      userId:'2',
      title:'C#',
      summary:'Learn C# and features',
      dueDate:'2025-02-29',

    },
    {
      id:'3',
      userId:'3',
      title:'Postgressql',
      summary:'Learn postgressql and features',
      dueDate:'2025-06-01',

    },
    {
      id:'4',
      userId:'4',
      title:'linux',
      summary:'Learn linux and features',
      dueDate:'2024-09-29',

    },
    {
      id:'5',
      userId:'5',
      title:'mangoDB',
      summary:'Learn mangoDB and features',
      dueDate:'2026-02-29',

    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }
  onCancelAddTask(){
    this.isAddingTask=false;
  }
  onCompleteTask(id:string){
    console.log('data is completed',id)
  }

}
