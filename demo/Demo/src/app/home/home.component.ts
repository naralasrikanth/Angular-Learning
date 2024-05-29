import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter ,signal, computed} from '@angular/core';
import { Users } from "../shared/Users";
import { type User } from "./user.model";


// const randomIndex = Math.floor(Math.random()* Users.length);



@Component({
  //3 types of selectors
 /* 1. element selector*/
  selector: 'app-home',
//  2. attribute selector
// selector:'[home]',
// 3. class selector
// selector:'.home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  // template:'<p> inline works </p>',
  styleUrl: './home.component.css'
  // styles:`
  // p{
  //   color: red;
  // }
  // `
})
export class HomeComponent {
//   @Input() colorcode :[{normal:string,warning:string,Alarm:string }]

//   @Input() customprop: string;
//   @Input() numbers:number[]
//   @Output() itemDeleted = new EventEmitter<any>();
//   colorCoding:object;
//   showpassword:boolean=false;
//   passwords=[];
//   status:string='warning';
// constructor(){
//   this.colorCoding={
//     color:'black'
//   };
//   if(!this.status){
//     this.status='alarm';
//   }
// }
// changingColor() {
  
//   this.colorCoding={
//     color:'red'
//   }
 
// }
// addingPassword() {
// this.showpassword=!this.showpassword;
//   this.passwords.push(this.passwords.length);
// }
// onDelete(){
//   this.itemDeleted.emit('event binding - data from child');
// }
// starting demo angular basics by using signal

// signals notify the component , when ever data changes , instead of change detection, pin point the component changes that UI

// selectedUser =signal(Users[randomIndex]);
// imagePath= computed(()=> 'assets/users/' + this.selectedUser().Image);

// @Input({required:true}) Image:string;
// @Input() name : string;
@Input() user!:User;
@Output() select = new EventEmitter();
get imagePath() {
  return 'assets/Users/' + this.user.Image;
}

onSelectUser(){
  // const randomIndex = Math.floor(Math.random()* Users.length);
  // this.selectedUser.set(Users[randomIndex]);
  this.select.emit(this.user.id);
}

};


