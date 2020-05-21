import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { DiagnosticCenter } from './diagnostic-center';
import { Test } from './test';
import { Appointment } from './appointment';
import { User } from './user';
// import 'rxjs/add/operator/map';
 

@Injectable({
  providedIn: 'root'
})
export class HealthCareAdminService
 {
  User: any;

  constructor(private http:HttpClient) { }
  
  getDiagnosticCenterList():Observable<any>
 {
   let url="http://localhost:1200/HealthCareSystem/DiagnosticCenters";
   return this.http.get(url);
 }

 getDiagnosticCenterTestList(centerName:string):Observable<any>
 {
   let url=`http://localhost:1200/HealthCareSystem/center/Tests/${centerName}`;
   return this.http.get(url);
 }

 addDiagnosticCenter(diagnosticCenter:DiagnosticCenter):Observable<any>
 {
   let url="http://localhost:1200/HealthCareSystem/add-center";

   return this.http.post(url,diagnosticCenter,{responseType:'text'});
 }

 removeCenter(centerName:String):Observable<any>
 {
   if(confirm("click ok to delete"))
   {
    let url = `http://localhost:1200/HealthCareSystem/remove-center/${centerName}`;
    return this.http.delete(url);
   }
 }

 addTest(test:Test,centerName:string):Observable<any>
 {
   let url = `http://localhost:1200/HealthCareSystem/center/add-test/${centerName}`;

   return this.http.post(url,test,{responseType:'text'});
 }

 removeTest(centerName:string, testName:string):Observable<any>
 {
   if(confirm("click ok to delete"))
   {
   let url = `http://localhost:1200/HealthCareSystem/remove-test/${centerName}/${testName}`;
   return this.http.delete(url);
   }
 }
 
 
 viewUser(userId:number):Observable<any>
 {
   let url = `http://localhost:1200/HealthCareSystem/View User/${userId}`;
   return this.http.get(url);
 }

 getCenterAppointmentList(centerId:number):Observable<any>
 {
   let url = `http://localhost:1200/HealthCareSystem/center/AppointmentList/${centerId}`;
   return this.http.get(url);
 }

 approveAppointment(centerName:string,appointment:Appointment):Observable<any>
 {
   let url = `http://localhost:1200/HealthCareSystem/approve-appointment/${centerName}`;
   return this.http.put(url,appointment,{responseType:'text'});
 }

 checkCenterNameNotTaken(centerName:string)
 {
    return this.http.get<any[]>(`http://localhost:1200/HealthCareSystem/checkCenterName/${centerName}`);
 }
 createUser(user:User):Observable<any>
{
  let url = "http://localhost:1200/HealthCareSystem/create-user";

   return this.http.post(url,user,{responseType:'text'});
}

}
