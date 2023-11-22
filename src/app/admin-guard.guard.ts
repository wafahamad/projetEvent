import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginParService } from './lesService/login-par.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  success: boolean | undefined;
  constructor(private s:LoginParService,
    private router:Router){}
    canActivate(){
    
      if( this.s.success==true)
      return true;
      else {
      this.router.navigate(['admin/login']);
      return false
      }
      }
  }
  

