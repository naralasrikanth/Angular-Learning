import { Component, Output, EventEmitter } from '@angular/core';
import { InvestmentInput } from '../Investment-input.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CurrencyPipe,],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  inputInitialInvestment='0';
  inputAnnualInvestment='0';
  inputExpectedReturn='0';
  inputDuration='5';

  onSubmit(){
console.log('s');
this.calculate.emit({
  initialInvestment: +this.inputInitialInvestment,
  duration:+this.inputDuration,
  expectedReturn : + this.inputExpectedReturn,
  annualInvestment:+this.inputAnnualInvestment, 
});
// console.log(this.calculate)

}
}
