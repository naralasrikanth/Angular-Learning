import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-warning',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.css'
})
export class WarningComponent {
 data = {
  name:'',
  email:'',
  Age:null

 };
 submitted= false;
  onSubmit(form: { valid: any; value: { name: string; email: string; Age: null; }; }){
    if(form.valid){
      this.data=form.value;
      this.submitted=true;
    }
  }
}
