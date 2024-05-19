import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './alarm.component.html',
  styleUrl: './alarm.component.css'
  // styles:`
  // h4{
  //   color:red;
  // }
  // `
})
export class AlarmComponent {
  id:number=9;
  username:any='';
  validusername:boolean=true;
  updatingusername(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
    // this.username='';
    this.validusername=false;
  }

}
