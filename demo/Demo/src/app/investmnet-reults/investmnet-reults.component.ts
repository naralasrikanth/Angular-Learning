import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investmnet-reults',
  standalone: true,
  imports: [],
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
