import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthCareAdminService } from './health-care-admin.service';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTestComponent } from './add-test/add-test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { FilterCenterPipe } from './filter-center.pipe';
import { FilterTestPipe } from './filter-test.pipe';
import { ViewCentersComponent } from './view-centers/view-centers.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { UserComponent } from './user/user.component';
import { ViewUserComponent } from './view-user/view-user.component';



@NgModule({
  declarations: [
    AppComponent,
    RemoveCenterComponent,
    AddCenterComponent,
    AddTestComponent,
    ViewTestsComponent,
    CreateTestComponent,
    RemoveTestComponent,
    ApproveAppointmentComponent,
    FilterCenterPipe,
    FilterTestPipe,
    ViewCentersComponent,
    AppointmentListComponent,
    UserComponent,
    ViewUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HealthCareAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
