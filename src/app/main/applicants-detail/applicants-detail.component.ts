import { Component, OnInit, Injector } from '@angular/core';
import { ApplicantWorkflowServiceProxy, WorkflowServiceProxy, ApplicantWorkflowDto, WorkflowDto } from '../../../shared/service-proxies/service-proxies';

@Component({
  selector: 'app-applicants-detail',
  templateUrl: './applicants-detail.component.html',
  providers: [ApplicantWorkflowServiceProxy, WorkflowServiceProxy]
})

export class ApplicantsDetailComponent implements OnInit {

  applicantWorkflow: ApplicantWorkflowDto[] = [];
  workflows: WorkflowDto[] = [];

  constructor(
    injector: Injector,
    private _applicantWorkflowServiceProxy: ApplicantWorkflowServiceProxy,
    private _workflowServiceProxy: WorkflowServiceProxy
  ) {}

  ngOnInit() {
    this.initLoad();
  }

  reload(): void{
    this._applicantWorkflowServiceProxy.getApplicantCurrentState().subscribe(result => {
      this.applicantWorkflow = result;
    })
  }

  onChange(item): void{
    this._applicantWorkflowServiceProxy.createApplicantWorkflow(
      item.applicantId, item.workflowId).subscribe(result => {
      //alert("Updated.");
      this.reload();
    })
  }

  initLoad(): void{
    this._applicantWorkflowServiceProxy.getApplicantCurrentState().subscribe(result => {
      this.applicantWorkflow = result;
    })

    this._workflowServiceProxy.getWorkflows().subscribe(result => {
      this.workflows = result;
    })
  }
}
