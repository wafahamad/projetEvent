import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipationsComponent } from './participations/participations.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ParticipantsComponent,
    ParticipationsComponent,
    EvenementsComponent,
    AddEventComponent,
    UpdateEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
