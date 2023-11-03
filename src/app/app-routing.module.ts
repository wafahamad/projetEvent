import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { HomeComponent } from './home/home.component';
import { LoginParticipantComponent } from './login-participant/login-participant.component';
import { SignUpParComponent } from './sign-up-par/sign-up-par.component';
import { ListEventComponent } from './list-event/list-event.component';

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
            {path:'listEvent',title:'',component:ListEventComponent}
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
