import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ParticipantsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
