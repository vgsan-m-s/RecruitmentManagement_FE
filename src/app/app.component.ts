import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ApplicantComponent } from './main/applicant/applicant.component';
import { HelpComponent } from './main/help/help.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
