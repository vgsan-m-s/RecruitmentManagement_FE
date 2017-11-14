import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsDetailComponent } from './applicants-detail.component';

describe('ApplicantsDetailComponent', () => {
  let component: ApplicantsDetailComponent;
  let fixture: ComponentFixture<ApplicantsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
