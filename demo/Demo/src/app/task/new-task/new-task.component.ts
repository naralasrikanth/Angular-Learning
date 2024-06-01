import { Component ,Output,EventEmitter} from '@angular/core';
import {type  NewTaskData } from '../tasks/task.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()

  @Output() add = new EventEmitter<NewTaskData>();

  inputTitle = '';
  inputSummary = '';
  inputDate='';


  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    console.log('submit');
    this.add.emit({
       title: this.inputTitle,
       summary : this.inputSummary,
       date : this.inputDate,
    });
  }

}
