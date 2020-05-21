import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HealthCareAdminService } from '../health-care-admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user:User[];
 userId=0;
  isRemoved:boolean=false;
  searchText:string;
  constructor(private healthCareAdminService:HealthCareAdminService, private router: Router) { }

  ngOnInit() {
    
  }
  loadData(userId:number) 
  {
      this.healthCareAdminService.viewUser(userId).subscribe(data=>
      {
        this.user=data;
      },
      error=>
       {
         console.log("erroor occured",error);
       }
      );
  
      }
    }
  

