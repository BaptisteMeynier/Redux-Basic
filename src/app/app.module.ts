import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './reducers/index'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { CurrencyService } from './services/currency.service'
import { CurrencyEffects } from './effects/currencyEffects'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
