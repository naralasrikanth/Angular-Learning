import { Component } from '@angular/core';

@Component({
  //3 types of selectors
 /* 1. element selector*/
  selector: 'app-home',
//  2. attribute selector
// selector:'[home]',
// 3. class selector
// selector:'.home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  // template:'<p> inline works </p>',
  styleUrl: './home.component.css'
  // styles:`
  // p{
  //   color: red;
  // }
  // `
})
export class HomeComponent {

}
