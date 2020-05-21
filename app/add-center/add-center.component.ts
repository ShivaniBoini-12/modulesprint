import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../diagnostic-center';
import { HealthCareAdminService } from '../health-care-admin.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {
  diagnosticCenter: DiagnosticCenter = new DiagnosticCenter();
  centerError:DiagnosticCenter;
  isCreated:boolean=false;
  centerExist:boolean=false;

  constructor(private healthCareAdminService:HealthCareAdminService) { }

  ngOnInit() {
  }
  
  form = new FormGroup({
    centerName : new FormControl('',Validators.required),
    contactNumber : new FormControl('',[Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
    address : new FormControl('',[Validators.required])
  });

  save() {
    this.healthCareAdminService.addDiagnosticCenter(this.diagnosticCenter)
      .subscribe(data => 
        {
        this.isCreated=true;
        this.centerExist=false;
        this.form.reset();
        this.diagnosticCenter= new DiagnosticCenter();
        }, error =>
        {
          console.log(error);
          this.centerError=error.error;
          this.isCreated=false;
          if(error.status==400)
          {
            this.isCreated=false;
            this.centerExist=true;
          } 
        });
  }

  onSubmit() 
  {
    this.diagnosticCenter.centerName=this.form.get('centerName').value;
    this.diagnosticCenter.contactNumber=this.form.get('contactNumber').value;
    this.diagnosticCenter.address=this.form.get('address').value;
    this.save();
  }

}
