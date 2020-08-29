import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { FromEventComponent } from './observable/from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
