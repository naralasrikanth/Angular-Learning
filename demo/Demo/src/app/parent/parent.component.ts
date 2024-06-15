import { ChangeDetectorRef, Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild, } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('headerElement') headerElement !: ElementRef
  parentData:string='initial';
  dataHolder?:string;
  data:string[]=['first'];
  constructor(private changeDetector:ChangeDetectorRef){
  this.changeDetector.detach()//it will stop checking the changes
    console.log('parent component constructor');
    setTimeout(() => {
      this.parentData ='final'
    },1000);

    setTimeout(() => {
      this.dataHolder='final2';
      this.data.push('second');
    },3000 );

    setTimeout(()=> {
      this.dataHolder='final3';
      this.changeDetector.markForCheck();
    },6000);
  }
 
  ngDOCheck(){
    console.log('ngDocheck calls for every change detection like mouse moving also');
    
  }
  changeContent(){
    const projectedContent =document.querySelector('#projectedContent');
    if(projectedContent){
      projectedContent.textContent ='Content has been changed!'
    }  
  }
  ngAfterViewInit(){
  console.log('ngAfterviewInit called');
  this.headerElement.nativeElement.style.color ='blue';
  this.headerElement.nativeElement.textContent = 'Header element - modified in ngAfterViewInit';
  
  }
}


