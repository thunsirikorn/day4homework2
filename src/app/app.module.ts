import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ExchangerateComponent } from './exchangerate/exchangerate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExchangeComponent } from './exchange/exchange.component'
import { CurrencyConversionModule } from './services/currency-conversion/currency-conversion.module'

@NgModule({
  declarations: [
    AppComponent,
    ExchangerateComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyConversionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
