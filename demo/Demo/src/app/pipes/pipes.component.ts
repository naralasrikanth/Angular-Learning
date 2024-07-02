import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class  PipesComponent {
currentDate = new Date();

currentTemperature= {
  berlin: 4.212,
  newYork:14.1234,
  paris:13.133,
  chicago:32.1233,
};

historicTempreatures =[12,12,32,34,45,56,18,76,8,65,23,-4,18]

onReset(index:number){
  this.historicTempreatures[index]=18;
}

}
