import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../diagnostic-center';
import { HealthCareAdminService } from '../health-care-admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-approve-appointment',
  templateUrl: './approve-appointment.component.html',
  styleUrls: ['./approve-appointment.component.css']
})
export class ApproveAppointmentComponent implements OnInit {

  diagnosticCenters:DiagnosticCenter[]=[];
  searchText:string;

  constructor(private healthCareAdminService:HealthCareAdminService, private router: Router) { }

  ngOnInit() 
  {
    this.loadData();
  }

  loadData() 
  {
      this.healthCareAdminService.getDiagnosticCenterList().subscribe(data=>
      {
        this.diagnosticCenters=data;
      },
      error=>
       {
         console.log("error occured",error);
       }
      );
  }

  gotoViewTests(centerName:string)
  {
    this.router.navigate([`/viewTests/${centerName}`]);
  }


  gotoCenterAppointmentList(centerId:number)
  {
    this.router.navigate([`/appointmentList/${centerId}`]);
  }

}
