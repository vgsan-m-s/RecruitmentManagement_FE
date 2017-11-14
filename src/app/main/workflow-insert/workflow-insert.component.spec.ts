import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowInsertComponent } from './workflow-insert.component';

describe('WorkflowInsertComponent', () => {
  let component: WorkflowInsertComponent;
  let fixture: ComponentFixture<WorkflowInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
