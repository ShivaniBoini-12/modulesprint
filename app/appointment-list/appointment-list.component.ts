import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { ActivatedRoute, Params } from '@angular/router';
import { HealthCareAdminService } from '../health-care-admin.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  centerAppointmentList:Appointment[]=[];
  searchText:string;
  centerId:number;

  constructor(private healthCareAdminService:HealthCareAdminService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>this.centerId = params['centerId']);
    this.getCenterAppointmentList(this.centerId);
  } 

  getCenterAppointmentList(centerId:number)
  {
      this.healthCareAdminService.getCenterAppointmentList(centerId).subscribe(data=>
        {
          this.centerAppointmentList=data;
        },
        error=>
         {
           console.log("erroor occured",error);
         }
        );
  }

  approve(appointment:Appointment)
  {
    appointment.approved=true;
    this.approveAppointment(appointment.centerName,appointment);
  }

  approveAppointment(centerName:string,appointment:Appointment)
  {
    this.healthCareAdminService.approveAppointment(centerName,appointment).subscribe(data=>
      {
        console.log(data);
        this.getCenterAppointmentList(appointment.centerId);
      },
      error=>
       {
         console.log("erroor occured",error);
       }
      );
  }

}
