import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { API_BASE_URL } from '../shared/service-proxies/service-proxies';

import { AppComponent } from './app.component';
import { ApplicantComponent } from './main/applicant/applicant.component';
import { HelpComponent } from './main/help/help.component';

export function getRemoteServiceBaseUrl(): string {
  return 'http://localhost:54978';
}

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl }],
  bootstrap: [AppComponent]
})

export class AppModule { }
