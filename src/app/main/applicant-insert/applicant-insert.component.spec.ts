import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantInsertComponent } from './applicant-insert.component';

describe('ApplicantInsertComponent', () => {
  let component: ApplicantInsertComponent;
  let fixture: ComponentFixture<ApplicantInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
