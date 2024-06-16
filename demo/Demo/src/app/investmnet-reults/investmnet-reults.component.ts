import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investmnet-reults',
  standalone: true,
  imports: [CurrencyPipe,FormsModule,CommonModule],
  templateUrl: './investmnet-reults.component.html',
  styleUrl: './investmnet-reults.component.css'
})
export class InvestmnetReultsComponent {

  @Input() results?:{
    year:number;
    interest:number;
    valueEndOfYear:number;
    annualInvestment:number;
    totalInterest:number;
    totalAmountInvested:number;
  }[];

}
