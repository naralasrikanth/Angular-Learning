import { Component ,Output,EventEmitter, Input, inject} from '@angular/core';
import {type  NewTaskData } from '../tasks/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter<void>()

  @Output() add = new EventEmitter<NewTaskData>();

  private taskservice = inject(TaskService)

  inputTitle = '';
  inputSummary = '';
  inputDate='';


  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    console.log('submit');
    this.taskservice.addTask({
      title:this.inputTitle,
      summary:this.inputSummary,
      date:this.inputDate
    },
    this.userId
  );
  this.cancel.emit();
    
  }

}
