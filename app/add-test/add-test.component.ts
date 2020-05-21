import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../diagnostic-center';
import { HealthCareAdminService } from '../health-care-admin.service';
import { Test } from '../test';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  diagnosticCenterList:DiagnosticCenter[]=[];
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
        this.diagnosticCenterList=data;
      },
      error=>
       {
         console.log("error occured",error);
       }
      )
  }

  gotoViewTests(centerName:string)
  {
    this.router.navigate([`/viewTests/${centerName}`]);
  }

  gotoCreateTest(centerName:string)
  {
    this.router.navigate([`/createTest/${centerName}`]);
  }
}
