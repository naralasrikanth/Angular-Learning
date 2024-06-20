import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { RouterOutlet,RouterModule,Routes, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



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
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput } from './Investment-input.model';
import { InvestmnetReultsComponent } from './investmnet-reults/investmnet-reults.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { UserServiceService } from './Services/user-service.service';
import { UserMangementComponent } from './user-mangement/user-mangement.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,WarningComponent,NormalComponent,AlarmComponent,
    RecipesComponent,ShopingListComponent,HeaderComponent,
    CommonModule,TaskComponent,FormsModule,HeadercalComponent,UserInputComponent,
    InvestmnetReultsComponent,
    ParentComponent,ChildComponent,FormsModule,UserMangementComponent,RouterModule,
    AboutComponent,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserServiceService]
})
export class AppComponent {
//   title = 'Demo';
//  colorcode= [{normal:"Green",warning:"Amber",Alarm:"Red"}];
//  data ='custom property binding';
//  customEventHandling(data : string){
//   console.log('recevied event from child',data);
//  }

// starting
constructor(private route:ActivatedRoute){}
resultsData?:{
  year:number;
  interest:number;
  valueEndOfYear:number;
  annualInvestment:number;
  totalInterest:number;
  totalAmountInvested:number;
}[];
users =Users ;
selectedUserId?:string;

items = [
  {name:'item1',selected:false},
  {name: 'item 2', selected :false},
  {name : 'item 3', selected:false}
];

onCalculateInvestmentResults ( data : InvestmentInput) {
  const { initialInvestment,annualInvestment,duration,expectedReturn}=data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for(let i=0; i< duration;i++){
    const year = i+1;
    const interestEarnedInYear = investmentValue * (expectedReturn /100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year:year,
      interest:interestEarnedInYear,
      valueEndOfYear:investmentValue,
      annualInvestment:annualInvestment,
      totalInterest:totalInterest,
      totalAmountInvested:initialInvestment + annualInvestment * year,
    });
  }

  this.resultsData=annualData;
 console.log(this.resultsData);
}

get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
}
onSelectedUser (id:string){
  this.selectedUserId=id;
}

//  ngOnChanges(changes :SimpleChanges){
//   console.log('ngOnChanges called',changes);
  
//  }
//  ngOnInit (){
//   console.log('ngOnInit called');  
//  }
//  ngDocheck(){
//   console.log('ngDocheck is called'); 
//  }
//  ngAfterContentInit(){
//   console.log('ngAfterContent is called');  
//  }
//  ngAfterContentChecked(){
//   console.log('ngAfterContentChecked is called'); 
//  }
//  ngAfterViewInit(){
//   console.log('ngAfterViewInit is called'); 
//  }
//  ngAfterViewChecked(){
//   console.log('ngAfterViewChecked is called');
  
//  }
 toggleSelection(item:any){
  item.selected =!item.selected;
 }
 ngOnInit():void {
  this.createObservable();
 }

 createObservable():void {
  const simpleObservable = new Observable<number>(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
    
 });

 simpleObservable.subscribe({
  next(value){
    console.log('value',value);
    
  },complete(){
    console.log('observable complete');
    
  }
 })

 }
}
