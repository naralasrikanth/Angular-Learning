import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../../reverse.pipe';


@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [FormsModule,CommonModule,ReversePipe],
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
  inputId='';
  validusername:boolean=true;

  reversstring:string='customPipe'


  updatingusername(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
    // this.username='';
    this.validusername=false;
  }
  onSubmit(){
    console.log(this.inputId);
  }

}
