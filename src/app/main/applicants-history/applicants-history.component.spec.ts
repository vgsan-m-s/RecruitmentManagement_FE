import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsHistoryComponent } from './applicants-history.component';

describe('ApplicantsHistoryComponent', () => {
  let component: ApplicantsHistoryComponent;
  let fixture: ComponentFixture<ApplicantsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
