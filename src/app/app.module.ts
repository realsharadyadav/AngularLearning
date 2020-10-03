import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PracticingDatabindingComponent } from './practicing-databinding/practicing-databinding.component';

@NgModule({
  declarations: [AppComponent, PracticingDatabindingComponent, ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
