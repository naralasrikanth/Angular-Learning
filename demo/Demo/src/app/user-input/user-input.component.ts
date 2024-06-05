import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../Investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  inputInitialInvestment='0';
  inputAnnualInvestment='0';
  inputExpectedReturn='0';
  inputDuration='5';

onSumbit(){
console.log('s');
this.calculate.emit({
  initialInvestment: +this.inputInitialInvestment,
  annualInvestment:+this.inputAnnualInvestment,
  duration:+this.inputDuration,
  expectedReturn : + this.inputExpectedReturn,
  
});

}
}
