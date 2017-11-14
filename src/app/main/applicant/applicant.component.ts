import { Component, OnInit, Injector } from '@angular/core';
import { ApplicantServiceProxy, ApplicantDto } from '../../../shared/service-proxies/service-proxies';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
  providers: [ApplicantServiceProxy]
})
export class ApplicantComponent implements OnInit {

  applicants: ApplicantDto[] = [];

  constructor(
    injector: Injector,
    private _applicantService: ApplicantServiceProxy
  ) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
      this._applicantService.getApplicants().subscribe((result) => {
          this.applicants = result;
      });
  }

}
