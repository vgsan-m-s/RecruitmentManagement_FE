import { Component, OnInit, Injector } from '@angular/core';
import { WorkflowServiceProxy, WorkflowDto } from '../../../shared/service-proxies/service-proxies';


@Component({
  selector: 'app-workflow-insert',
  templateUrl: './workflow-insert.component.html',
  providers: [WorkflowServiceProxy]
})
export class WorkflowInsertComponent implements OnInit {

  workflow: WorkflowDto = new WorkflowDto();

  workflows: WorkflowDto[] = [];

  constructor(
    injector: Injector,
    private _workflowServiceProxy: WorkflowServiceProxy
  ) {}

  ngOnInit() {
    this.loadWorkflow();
  }

  reset(): void{
    this.workflow = new WorkflowDto();
  }

  save(): void {
    if(this.workflow.id > 0){
      this._workflowServiceProxy.updateWorkflow(
          this.workflow.id,
          this.workflow.processName, 
          this.workflow.processOrder
        ).subscribe(result => {
          alert("Workflow Updated.");
          this.loadWorkflow();
          this.workflow = new WorkflowDto();
      });
    }else{
      this._workflowServiceProxy.createWorkflow(
          this.workflow.processName, 
          this.workflow.processOrder
        ).subscribe(result => {
          alert("Workflow Created.");
          this.loadWorkflow();
          this.workflow = new WorkflowDto();
      });
    }
  }

  loadWorkflow(): void{
    this._workflowServiceProxy.getWorkflows().subscribe(result => {
      this.workflows = result;
    })
  }

  onEdit(id): void{
    this._workflowServiceProxy.getWorkflow(id).subscribe(result => {
      this.workflow = result;
    })
  }

  onDelete(id): void{
    this._workflowServiceProxy.deleteWorkflow(id).subscribe(result => {
      this.loadWorkflow();
    })
  }
}
