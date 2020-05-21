import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../diagnostic-center';
import { HealthCareAdminService } from '../health-care-admin.service';
import { Test } from '../test';

@Component({
  selector: 'app-remove-test',
  templateUrl: './remove-test.component.html',
  styleUrls: ['./remove-test.component.css']
})
export class RemoveTestComponent implements OnInit {

  diagnosticCenterList:DiagnosticCenter[]=[];
  centerName:string;
  testList:Test[];
  isSelected:boolean=false;
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
        this.diagnosticCenterList=data;
      },
      error=>
       {
         console.log("error occured",error);
       }
      )
  }

  getListOfTests():void
  {        
   this.healthCareAdminService.getDiagnosticCenterTestList(this.centerName).subscribe(data=>
    {
      this.testList=data;
    },
    error=>
     {
       console.log("error occured",error);
     }
    );
    this.isSelected=true;
  }

  onSubmit(formData)
  {
    this.centerName=formData.centerName;
    this.getListOfTests();
  }

  removeTest(testName:string)
  {
    this.healthCareAdminService.removeTest(this.centerName,testName).subscribe(data=>
      {
        this.getListOfTests();
        this.isRemoved=true;
      },
      error=>
       {
         console.log("error occured",error);
       }
      );
  }

}
