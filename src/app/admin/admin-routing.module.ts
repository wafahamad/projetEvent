import { RouterModule, Routes } from "@angular/router";
import { AdminGuardGuard } from "../admin-guard.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ParticipantsComponent } from "./participants/participants.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path:'admin',
    children:[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AdminGuardGuard],
      children:[
        {path:'participant', component:ParticipantsComponent,},
        ]
  }
  
  ]
  }
  ]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }