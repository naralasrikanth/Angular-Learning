import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-normal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './normal.component.html',
  styleUrl: './normal.component.css'
  // template:'<div> Normal status is displayed </div>',
  // styles:`
  // div{
  //   color:green;
  // }
  // `
})
export class NormalComponent implements OnInit {
  // property binding : data flows from ts file to view template
  // binds a property of an element
  // control the behaviour of the html element 
  // ex: src ,href , disabled, class and style
  isnormal=false;
  status: string = 'Fetching the status of asset'
  statusname:any='TWowayDataBinding';
  // event binding
  // 1.one way data binding
  // 2. data flows from template to component class
  normalstatus(){
    this.status='asset status is normal';
     };
    statusinput(event:Event){
    console.log((<HTMLLIElement>event.target).value);
    this.statusname=(<HTMLInputElement>event.target).value;
     };

  ngOnInit() {   
    
  }
}


