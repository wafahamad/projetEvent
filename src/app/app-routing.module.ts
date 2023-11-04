import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { HomeComponent } from './home/home.component';
import { LoginParticipantComponent } from './login-participant/login-participant.component';
import { SignUpParComponent } from './sign-up-par/sign-up-par.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ParticipationComponent } from './participation/participation.component';

const routes: Routes = [
  {path:'',
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},

      {path:'dashboard',component:DashboardClientComponent,
      children:[
            {path:'', redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'loginP',title:'login',component:LoginParticipantComponent},
            {path:'signup',title:'signup',component:SignUpParComponent},
            {path:'home/:id',title:'',component:EvenementComponent},
            {path:'about',title:'about',component:AboutusComponent},
            {path:'participation/:id',title:'participation',component:ParticipationComponent}
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
