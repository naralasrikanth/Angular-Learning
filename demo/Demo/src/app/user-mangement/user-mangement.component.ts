import { Component } from '@angular/core';
import {UserServiceService} from "../Services/user-service.service";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-mangement',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-mangement.component.html',
  styleUrl: './user-mangement.component.css'
  // providers:[UserServiceService]
})
export class UserMangementComponent {

 constructor(private userservice:UserServiceService){}
  activeUsers : string[]=[];
  inactiveUsers : string[]=[];

  ngOnInit():void {
    this.activeUsers = this.userservice.getActiveUsers();
    this.inactiveUsers = this.userservice.getInactiveUsers();
  }
  
  activateUser(user:string):void {
    this.userservice.activateUser(user);
    this.updateUser();
  }

  deactivateUser(user:string):void {
    this.userservice.deactivateUser(user);
    this.updateUser();
  }

  updateUser(): void{
  this.activeUsers = this.userservice.getActiveUsers();
  this.inactiveUsers = this.userservice.getInactiveUsers();
  }

}
