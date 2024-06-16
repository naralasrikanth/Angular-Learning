import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBackGround]',
    standalone:true
})

export class BackGroundDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor! :string;
    constructor( private elementRef : ElementRef, private renderer:Renderer2){

    }
    ngOnInit(){
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
        this.backgroundColor = 'blue';
    }

    changeBackgroundColor(color:string){
        this.backgroundColor=color;
    }
    @HostListener('mouseenter') onMouseEnter (){
        this.changeBackgroundColor('green');
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.changeBackgroundColor('red');
    }
}