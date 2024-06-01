import { Injectable } from "@angular/core";
import { NewTaskData } from "./tasks/task.model";


@Injectable({
    providedIn:'root'
})

export class TaskService {
    private  tasks = [
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
    getUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId ===userId);
    }
    
    addTask(taskData:NewTaskData,userId:string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId:userId,
            title:taskData.title,
            summary:taskData.summary,
            dueDate:taskData.date,

        });
    }
    removeTask(id:string){
        this.tasks =this.tasks.filter((task) => task.id !==id);
    }
}

