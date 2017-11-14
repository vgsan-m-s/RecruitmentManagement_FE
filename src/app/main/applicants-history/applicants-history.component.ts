import { Component, OnInit, Injector } from '@angular/core';
import { ApplicantWorkflowServiceProxy, ApplicantWorkflowDto } from '../../../shared/service-proxies/service-proxies';

@Component({
  selector: 'app-applicants-history',
  templateUrl: './applicants-history.component.html',
  providers: [ApplicantWorkflowServiceProxy]
})
export class ApplicantsHistoryComponent implements OnInit {

  mailAddress = "";

  applicantWorkflow: ApplicantWorkflowDto[] = [];
  
  constructor(
    injector: Injector,
    private _applicantWorkflowServiceProxy: ApplicantWorkflowServiceProxy
  ) {}

  ngOnInit() {
  }

  search(): void{
    this._applicantWorkflowServiceProxy.getApplicantWorkflows(this.mailAddress).subscribe(result => {
      this.applicantWorkflow = result;
    })
  }
}
