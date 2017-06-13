import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sesija } from './sesija';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PregledPredmeta } from './pregledpredmeta/pregled-predmeta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PregledPredmeta,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
    //zadnji
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
