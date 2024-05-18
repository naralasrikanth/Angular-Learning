import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [],
  templateUrl: './alarm.component.html',
  // styleUrl: './alarm.component.css'
  styles:`
  h4{
    color:red;
  }
  `
})
export class AlarmComponent {
  id:number=9;

}
