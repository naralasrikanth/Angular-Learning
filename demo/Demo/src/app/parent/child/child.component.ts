import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() data ?: string;
  lifeCycle:number=0;
  
  constructor(){
    console.log('this is the constructor class and it will initialize first')
  }
  ngOnChanges(){
    this.lifeCycle++;
  }



}
