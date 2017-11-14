import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './main/applicant/applicant.component';
import { ApplicantInsertComponent } from './main/applicant-insert/applicant-insert.component';
import { ApplicantsDetailComponent } from './main/applicants-detail/applicants-detail.component';
import { ApplicantsHistoryComponent } from './main/applicants-history/applicants-history.component';

import { WorkflowInsertComponent } from './main/workflow-insert/workflow-insert.component';

import { HelpComponent } from './main/help/help.component';

export const appRoutes: Routes = [
  { path: 'applicant', component: ApplicantComponent },
  { path: 'applicant-insert', component: ApplicantInsertComponent },
  { path: 'applicants-detail', component: ApplicantsDetailComponent },
  { path: 'workflow-insert', component: WorkflowInsertComponent },
  { path: 'applicant-history', component: ApplicantsHistoryComponent},
  { path: 'help', component: HelpComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
