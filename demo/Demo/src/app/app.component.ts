import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WarningComponent } from './status/warning/warning.component';
import { NormalComponent } from './status/normal/normal.component';
import { AlarmComponent } from './status/alarm/alarm.component';
import { RecipesComponent } from './Recipes/recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import bootstrap from '../main.server';
import { HeaderComponent } from './Header/header/header.component';
import { CommonModule } from '@angular/common';
import { Users } from './shared/Users';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { HeadercalComponent } from './Header/headercal/headercal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,WarningComponent,NormalComponent,AlarmComponent,RecipesComponent,ShopingListComponent,HeaderComponent,
    CommonModule,TaskComponent,FormsModule,HeadercalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   title = 'Demo';
//  colorcode= [{normal:"Green",warning:"Amber",Alarm:"Red"}];
//  data ='custom property binding';
//  customEventHandling(data : string){
//   console.log('recevied event from child',data);
//  }

// starting

users =Users ;
selectedUserId?:string;

get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
}
onSelectedUser (id:string){
  this.selectedUserId=id;
}
}
