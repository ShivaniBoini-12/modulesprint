import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCenterComponent } from './add-center/add-center.component';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { ViewCentersComponent } from './view-centers/view-centers.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { UserComponent } from './user/user.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path : '', redirectTo:'/viewCenters', pathMatch: 'full'},
  {path : 'viewCenters',component:ViewCentersComponent},
  {path : 'addCenter',  component : AddCenterComponent},
  {path : 'removeCenter', component : RemoveCenterComponent},
  {path : 'addTest', component : AddTestComponent},
  {path : 'createTest/:centerName', component : CreateTestComponent},
  {path : 'viewTests/:centerName', component : ViewTestsComponent },
  {path : 'removeTest', component : RemoveTestComponent},
  {path : 'approveAppointment', component : ApproveAppointmentComponent},
  {path : 'appointmentList/:centerId', component : AppointmentListComponent },
  {path : '**', redirectTo:'/viewCenters',pathMatch: 'full' },
  {path : 'user/:userName', component : UserComponent},
  {path : 'viewUser', component : ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
