import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor() { }
  resultClassCodeObj = [];
  Premium = [];
  totalPremium: any;
  otherPaymentDetails = [];
  totalPayroll: any;
  totalOtherTaxes: any;
  totalOtherTaxArray = [];
  grandTotal: any;
  ngOnInit(): void {
    var obj = JSON.parse(localStorage.getItem('classCodeObj'));
    this.resultClassCodeObj = obj;
    this.totalPayroll = 0;
    for (let i = 0; i <= this.resultClassCodeObj.length - 1; i++) {
      this.Premium.push((this.resultClassCodeObj[i].payroll * 5.40) / 100);
      this.totalPayroll += parseInt(this.resultClassCodeObj[i].payroll);
    }

    this.totalPremium = 0;
    for (var i = 0; i < this.Premium.length; i++) {
      this.totalPremium += this.Premium[i];
      console.log(this.totalPremium);

    }

    this.otherPaymentDetails = [
      {
        itemName: 'Blanket Waiver of Subrogation',
        itemPremium: (this.totalPremium * 0.02)
      },
      {
        itemName: 'Increased Limits',
        itemPremium: (this.totalPremium * 0.028)
      },
      {
        itemName: 'Deductible Credit',
        itemPremium: (this.totalPremium * 0.012)
      },
      {
        itemName: 'Premium discount',
        itemPremium: -200
      },
      {
        itemName: 'Expense Constant',
        itemPremium: 125
      },
      {
        itemName: 'Terrorism Premium',
        itemPremium: ((this.totalPayroll * 0.01) / 100)
      },
      {
        itemName: 'Catastrophe Premium',
        itemPremium: ((this.totalPayroll * 0.01) / 100)
      },
      {
        itemName: 'Policy AdministrationFee',
        itemPremium: 180
      }
    ];


    for (var i = 0; i < this.otherPaymentDetails.length; i++) {
      var totalOtherTax = [];
      this.totalOtherTaxArray.push(this.otherPaymentDetails[i].itemPremium);
    }
    this.totalOtherTaxes = 0;
    for (var i = 0; i < this.totalOtherTaxArray.length; i++) {
      this.totalOtherTaxes += parseInt(this.totalOtherTaxArray[i]);
    }

    this.grandTotal = this.totalOtherTaxes + this.totalPremium;
  }

}
