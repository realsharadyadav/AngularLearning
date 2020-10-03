import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { PrintNumberComponent } from './print-number/print-number.component';
import { PrintMessageComponent } from './print-message/print-message.component';
import { PracticingDatabindingComponent } from './practicing-databinding/practicing-databinding.component';

@NgModule({
  declarations: [
    WarningAlertComponent,
    AppComponent,
    SuccessAlertComponent,
    PrintNumberComponent,
    PrintMessageComponent,
    PracticingDatabindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
