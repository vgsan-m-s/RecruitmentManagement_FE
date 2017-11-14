import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantComponent } from './main/applicant/applicant.component';
import { HelpComponent } from './main/help/help.component';

export const appRoutes: Routes = [
  { path: 'applicant', component: ApplicantComponent },
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
