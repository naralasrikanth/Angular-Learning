import { AfterContentInit, Component, ContentChild, ElementRef, Input,  } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterContentInit {
  @Input() data ?: string;
  lifeCycle:number=0;
  @ContentChild('projectedContent',{static:false}) content :ElementRef | undefined;
  constructor(){
    console.log('this is the constructor class and it will initialize first')
  }
  ngOnChanges(){
    console.log('ngOnchanges life cycle hook');
    
    this.lifeCycle++;
  }
  ngOnInit(){
    console.log('ngOnInit life cycle hooks');
    this.lifeCycle++;
  }
  ngDoCheck(){
    console.log('ngDocheck will  check for every change')
  }

  ngAfterContentInit(){
    console.log('NgAfterContentInit  will render after the content projection happens');
    console.log(this.content?.nativeElement.textContent);
    
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called from child');

    if(this.content){
      console.log('projected Content:',this.content.nativeElement.textContent);
    }
    
  }

}
