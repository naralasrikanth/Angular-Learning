import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private activeUsers : string[]=['john','hyd','mahesh'];
  private inactiveUsers : string[]=['kiran','david','warner'];

  getActiveUsers(): string[]{
    return this.activeUsers;
  }

  getInactiveUsers():string[]{
    return this.inactiveUsers;
  }

  deactivateUser(user:string):void {
    const index = this.activeUsers.indexOf(user);
    if(index > 0){
      this.activeUsers.splice(index,1);
      this.inactiveUsers.push(user);
    }
  }

  activateUser(user:string):void{
    const index = this.inactiveUsers.indexOf(user);
    if(index > 0){
      this.inactiveUsers.splice(index,1);
      this.activeUsers.push(user);
    }
  }
}
