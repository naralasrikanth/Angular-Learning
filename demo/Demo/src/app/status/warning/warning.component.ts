import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';

@Component({
  selector: 'app-warning',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.css'
})
export class WarningComponent {
 data = {
  name:'',
  email:'',
  Age:null

 };
 statusOfProject=['stable','critical','Finished']
 submitted= false;
 projectData!:FormGroup;

ngOnInit(){
 this.projectData = new FormGroup({
    'project':new FormControl('',[Validators.required,CustomValidators.invalidProjectName]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'projectStatus': new FormControl('Critical')
  })
}

  onSubmit(form: { valid: any; value: { name: string; email: string; Age: null; }; }){
    if(form.valid){
      this.data=form.value;
      this.submitted=true;
    }
  }
  onSave(){
    console.log(this.projectData.value);
    
  }
}
