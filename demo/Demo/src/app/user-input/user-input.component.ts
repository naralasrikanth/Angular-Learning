import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  inputInitialInvestment='0';
  inputAnnualInvestment='0';
  inputExpectedReturn='0';
  inputDuration='5';

onSumbit(){
console.log('s');

}
}
