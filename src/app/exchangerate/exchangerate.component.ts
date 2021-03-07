import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { of } from 'rxjs';
//import { filter, map } from 'rxjs/operators';
//import { CurrencyConversionService } from '../services/currency-conversion.service';

@Component({
  selector: 'app-exchangerate',
  templateUrl: './exchangerate.component.html',
  styleUrls: ['./exchangerate.component.css']
})

export class ExchangerateComponent implements OnInit {
  
  posts: any[];
  form: FormGroup;
  
/*
  public base: any;
  public currency: any;
  public exchange: any;
  public rates: any = []; */
  
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
      this.form = this.fb.group ({
      base: '',
      currency: '',
      exchange: '',
      rates: ''
    });
   }

  ngOnInit(): void {
    this.convert();


  
   /* Get apisConfigurations 
  this.base = this.currencyConversionService.getApisConfigurations()
  this.currency = this.base.currency
  this.exchange = this.base.rates

  // Get latest currencies rate [ default base: USD ]
  this.currencyConversionService
  .getCurrencyRates(`${this.currency}/latest?base=USD`)
  .subscribe(data => {
    if (data) {
      for (var key in data['rates']) {
        if (data['rates'].hasOwnProperty(key)) {
          this.rates.push(Object.assign({}, { 
            currencyCode: key, rate: data['rates'][key], defaultBase: data.base }));
        }
      }
      this.sortCurrencyCode(this.rates)
    }
  }, error => {
    console.log("Error", error)
  })
}*/
} 

    convert() {
    this.posts = [];
    this.httpClient
    .get('https://api.exchangeratesapi.io/latest?base=USD') 
    .subscribe(result => {
      //this.posts = result as any[];
      //console.log (this.httpClient.get("rates"))
      //console.log (this.form.value)

      if (result) {
        for (var key in result['rates']) {
          if (result['rates'].hasOwnProperty(key)) {
            this.posts.push(Object.assign({}, { 
              currencyCode: key, rate: result['rates'][key], defaultBase: result['base'] }));
          }
        }
        this.posts
      }
    }, error => {
      console.log("Error", error) 
    });
  }

  addCurrency() {
    const newCurrency = this.form.value
 

    this.httpClient
    .post('https://api.exchangeratesapi.io/latest', newCurrency)
    .subscribe(result => {
      this.form.reset();
      alert('Add Currency success');
      this.convert();
    });
  }

}
