import { Component, OnInit, Injector } from '@angular/core';
import { ApplicantServiceProxy, ApplicantDto } from '../../../shared/service-proxies/service-proxies';

import * as moment from 'moment';

@Component({
  selector: 'app-applicant-insert',
  templateUrl: './applicant-insert.component.html',
  providers: [ApplicantServiceProxy]
})
export class ApplicantInsertComponent implements OnInit {

  applicant: ApplicantDto = new ApplicantDto();

  applicants: ApplicantDto[] = [];

  constructor(
    injector: Injector,
    private _applicantServiceProxy: ApplicantServiceProxy
  ) {}

  ngOnInit() {
    this.loadApplicant();
  }

  reset(): void{
    this.applicant = new ApplicantDto();
  }

  save(): void {

    this.applicant.dateOfBirth = moment(this.applicant.dateOfBirth);
      
    if(this.applicant.id > 0){
      this._applicantServiceProxy.updateApplicant(
          this.applicant.id,
          this.applicant.firstName, 
          this.applicant.lastName,
          this.applicant.dateOfBirth,
          this.applicant.mailAddress,
          this.applicant.phoneNo,
          this.applicant.mobileNo,
          this.applicant.address,
          true
        ).subscribe(result => {
          alert("Applicant Updated.");
          this.loadApplicant();
          this.applicant = new ApplicantDto();
      });
    }else{
      this._applicantServiceProxy.createApplicant(
        this.applicant.firstName, 
        this.applicant.lastName,
        this.applicant.dateOfBirth,
        this.applicant.mailAddress,
        this.applicant.phoneNo,
        this.applicant.mobileNo,
        this.applicant.address
        ).subscribe(result => {
          alert("Applicant Created.");
          this.loadApplicant();
          this.applicant = new ApplicantDto();
      });
    }
  }

  loadApplicant(): void{
    this._applicantServiceProxy.getApplicants().subscribe(result => {
      this.applicants = result;
    })
  }

  onEdit(id): void{
    this._applicantServiceProxy.getApplicant(id).subscribe(result => {
      this.applicant = result;

      // var dateOfBirth = document.querySelector(dateOfBirth);
      // dateOfBirth.value = this.applicant.dateOfBirth.toISOString().substr(0, 10);
    })
  }

  onDelete(id): void{
    this._applicantServiceProxy.deleteApplicant(id).subscribe(result => {
      this.loadApplicant();
    })
  }
}
