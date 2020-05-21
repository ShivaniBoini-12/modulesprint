import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HealthCareAdminService } from '../health-care-admin.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, EmailValidator} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  user:User = new User();
  userError:User;
  isCreated:boolean=false;
  userExist: boolean=false;
  constructor(private healthCareAdminService:HealthCareAdminService) { }

  ngOnInit() {
  }
    form = new FormGroup({
      userName : new FormControl('',Validators.required),
      contactNo : new FormControl('',[Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
      userPassword: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.required])
      
    });
    save() {
      this.healthCareAdminService.createUser(this.user)
        .subscribe(data => 
          {
          this.isCreated=true;
          this.userExist=false;
          this.form.reset();
          this.user= new User();
          }, error =>
          {
            console.log(error);
            this.userError=error.error;
            this.isCreated=false;
            if(error.status==400)
            {
              this.isCreated=false;
              this.userExist=true;
            } 
          });
    }
  
    onSubmit() 
    {
      this.user.userName=this.form.get('centerName').value;
      this.user.contactNo=this.form.get('contactNumber').value;
      this.user.userPassword=this.form.get('userPassword').value;
      this.user.emailId=this.form.get('emailId').value;
      this.save();
    }
  }
