import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginParService {
  public isconnectedA=false;
  public isconnectedC=false;

  success!: boolean;
  successParticipant!: boolean;
  constructor(private http:HttpClient) { }
    getLoginPar(){
      return this.http.get<any>('http://localhost:3000/participants');
    }
    getLoginAdmin(){
      return this.http.get<any>('http://localhost:3000/organisations');
   }
  
}
