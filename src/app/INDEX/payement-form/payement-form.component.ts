import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payement-form',
  templateUrl: './payement-form.component.html',
  styleUrls: ['./payement-form.component.css']
})
export class PayementFormComponent implements OnInit {

  constructor(private router: Router) { }
  cardNumber: string ='';
  cardHolderName: string='';
  expiryMonth: string='';
  expiryYear: string='';
  cvv: string='';
  amount: number=30;
  processPayment() {
    if (this.cardNumber === '4111111111111111' && this.cardHolderName==='John Doe' 
    && this.expiryMonth === '07'  &&  this.expiryYear === '2024' && this.cvv === '123'  ){
      this.router.navigate(['/service']);

    }
  }




  ngOnInit(): void {
  }

}
