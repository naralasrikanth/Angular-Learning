import { Component, EventEmitter, Input,Output } from '@angular/core';
import { type Task } from "./task.model";
import { CardComponent } from '../../shared/card/card.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
@Input() task!:Task;
@Output()  complete = new EventEmitter<string>();

onCompleteTask() {
  this.complete.emit(this.task.id);
}


}
