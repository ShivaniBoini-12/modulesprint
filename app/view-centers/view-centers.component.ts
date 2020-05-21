import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../diagnostic-center';
import { HealthCareAdminService } from '../health-care-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-centers',
  templateUrl: './view-centers.component.html',
  styleUrls: ['./view-centers.component.css']
})
export class ViewCentersComponent implements OnInit {

  diagnosticCenters:DiagnosticCenter[]=[];
  isRemoved:boolean=false;
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
         console.log("erroor occured",error);
       }
      )
  }

  removeDiagnosticCenter(centerName: string) 
  {
    this.healthCareAdminService.removeCenter(centerName)
      .subscribe(
        data => {
          this.isRemoved=true;
          console.log(data);
          this.loadData();
        },
        error => {
          return console.log(error);
        });
  }
  gotoViewTests(centerName:string)
  {
    this.router.navigate([`/viewTests/${centerName}`]);
  }

  gotoCreateTest(centerName:string)
  {
    this.router.navigate([`/createTest/${centerName}`]);
  }

  gotoCenterAppointmentList(centerId:number)
  {
    this.router.navigate([`/appointmentList/${centerId}`]);
  }

}
