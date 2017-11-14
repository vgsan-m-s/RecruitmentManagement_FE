import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { API_BASE_URL } from '../shared/service-proxies/service-proxies';

import { AppComponent } from './app.component';
import { ApplicantComponent } from './main/applicant/applicant.component';
import { HelpComponent } from './main/help/help.component';
import { ApplicantInsertComponent } from './main/applicant-insert/applicant-insert.component';
import { WorkflowInsertComponent } from './main/workflow-insert/workflow-insert.component';
import { ApplicantsDetailComponent } from './main/applicants-detail/applicants-detail.component';
import { ApplicantsHistoryComponent } from './main/applicants-history/applicants-history.component';

export function getRemoteServiceBaseUrl(): string {
  return 'http://localhost:54978';
}

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    HelpComponent,
    ApplicantInsertComponent,
    WorkflowInsertComponent,
    ApplicantsDetailComponent,
    ApplicantsHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{ provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl }],
  bootstrap: [AppComponent]
})

export class AppModule { }
