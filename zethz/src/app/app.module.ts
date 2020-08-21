import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ZethzComponent } from './zethz/zethz.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    ZethzComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ZethzComponent]
})
export class AppModule { }
