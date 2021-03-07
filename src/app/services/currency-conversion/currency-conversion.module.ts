import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConversionService } from '../currency-conversion.service';
import { ExchangeComponent } from '../../exchange/exchange.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ExchangeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ExchangeComponent],
  providers: [CurrencyConversionService]
})

export class CurrencyConversionModule { }
