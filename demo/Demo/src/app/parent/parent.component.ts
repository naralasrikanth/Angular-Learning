import { ChangeDetectorRef, Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild, } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { BackGroundDirective } from './background.directive';
import { BehaviorSubject, ReplaySubject, } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,BackGroundDirective],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('headerElement') headerElement !: ElementRef
  parentData:string='initial';
  dataHolder?:string;
  data:string[]=['first'];
values:string[]=[];
private valueCount =0;

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
 
  // ngDOCheck(){
  //   console.log('ngDocheck calls for every change detection like mouse moving also');
    
  // }
  changeContent(){
    const projectedContent =document.querySelector('#projectedContent');
    if(projectedContent){
      projectedContent.textContent ='Content has been changed!'
    }  
  }
  // ngAfterViewInit(){
  // console.log('ngAfterviewInit called');
  // this.headerElement.nativeElement.style.color ='blue';
  // this.headerElement.nativeElement.textContent = 'Header element - modified in ngAfterViewInit';
  
  // }

  // replay subject
  // replaySubject : if new subscriber also get old values
  replaySubject = new ReplaySubject();
  behaviorSubject = new BehaviorSubject('0');
ngOnInit(){
this.replaySubject.next('1');
this.replaySubject.next('2');

this.replaySubject.subscribe(
  val => console.log('sub1'+ val),
  err => console.log('sub1'+ err),
  () => console.log('sub1 complete') 
);
this.replaySubject.next('3');
this.replaySubject.complete();

this.replaySubject.subscribe( val => {
  console.log('sub3'+ val);
  
});

// behaviourSubject
// emits older values to the subscriber
this.behaviorSubject.subscribe(val =>{
  console.log('behaviorSubject'+ val);
  
});
this.behaviorSubject.next('3');
this.behaviorSubject.next('4');
 this.behaviorSubject.subscribe( val => {
  console.log('behaviorSubject2'+ val);
  
 });
 this.behaviorSubject.next('100');
 this.behaviorSubject.complete();
}

}
