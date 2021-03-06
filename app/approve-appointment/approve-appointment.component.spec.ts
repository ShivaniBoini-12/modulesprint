import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAppointmentComponent } from './approve-appointment.component';

import { ViewTestsComponent } from './view-tests.component';



describe('ApproveAppointmentComponent', () => {
  let component: ApproveAppointmentComponent;
  let fixture: ComponentFixture<ApproveAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
