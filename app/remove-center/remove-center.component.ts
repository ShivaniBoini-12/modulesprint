import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../diagnostic-center';
import { HealthCareAdminService } from '../health-care-admin.service';
@Component({
  selector: 'app-remove-center',
  templateUrl: './remove-center.component.html',
  styleUrls: ['./remove-center.component.css']
})
export class RemoveCenterComponent implements OnInit 
{

  diagnosticCenters:DiagnosticCenter[]=[];
  isRemoved:boolean=false;
  searchText:string;

  constructor(private healthCareAdminService:HealthCareAdminService) { }

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

}
