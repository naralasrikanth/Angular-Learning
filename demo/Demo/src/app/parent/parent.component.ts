import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData:string='initial';
  constructor(){
    console.log('parent component constructor');
    setTimeout(() => {
      this.parentData ='final'
    },1000);
  }
 

}
