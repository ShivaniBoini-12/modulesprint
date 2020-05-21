import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { HealthCareAdminService } from '../health-care-admin.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  centerName: string;
  test:Test = new Test();
  testError:Test;
  isCreated:boolean=false;
  testExist:boolean=false;

  constructor(private healthCareAdminService:HealthCareAdminService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>this.centerName = params['centerName']);
  } 
  
  form = new FormGroup({
    testName : new FormControl('',Validators.required,)
  });
  
  createTest(test:Test,centerName:string) {
    this.healthCareAdminService.addTest(test,centerName)
      .subscribe(data => 
        {
        this.test=new Test();
        this.isCreated=true;
        this.testExist=false;
        this.form.reset();
        }, error =>
        {
          console.log(error);
          this.testError=error.error;
          this.isCreated=false;
          if(error.status==400)
          {
            this.isCreated=false;
            this.testExist=true;
          }

        });
  }

  onSubmit() {
    this.test.testName=this.form.get('testName').value;
    this.createTest(this.test,this.centerName);
  }

}
