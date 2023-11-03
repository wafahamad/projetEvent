import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginParticipantComponent } from './login-participant/login-participant.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { NavComponent } from './nav/nav.component';
import { SignUpParComponent } from './sign-up-par/sign-up-par.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ListEventComponent } from './list-event/list-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginParticipantComponent,
    DashboardClientComponent,
    NavComponent,
    SignUpParComponent,
    EvenementComponent,
    ListEventComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
