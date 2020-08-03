import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, HelloComponent ],
  imports:      [ BrowserModule.withServerTransition({ appId: 'serverApp' }), FormsModule ],
})
export class AppModule { }
