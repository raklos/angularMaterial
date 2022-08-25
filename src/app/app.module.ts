import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RodzicComponent } from './rodzic/rodzic.component';
import { DzieckoComponent } from './dziecko/dziecko.component';

@NgModule({
  declarations: [
    AppComponent,
    RodzicComponent,
    DzieckoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
