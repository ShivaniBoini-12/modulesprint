import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Test } from '../test';
import { HealthCareAdminService } from '../health-care-admin.service';


@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {

  centerName:string;
  testList:Test[];
  searchText:string;
  isRemoved:boolean=false;

  constructor(private healthCareAdminService:HealthCareAdminService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>this.centerName = params['centerName']);
    this.getListOfTests();
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

