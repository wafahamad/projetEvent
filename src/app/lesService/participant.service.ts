import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paricipant } from '../LesClasses/paricipant';
const URL = 'http://localhost:3000/particpants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http:HttpClient) { }
  getParticipant():Observable<Paricipant[]>{
return this.http.get<Paricipant[]>(URL);

  }
  getParticipantById(id:number):Observable<Paricipant>{
    return this.http.get<Paricipant>("http://localhost:3000/participants"+id)
  }
  deleteParticipant(id:number){
    return this.http.delete("http://localhost:3000/participants" + id);
  }
  updateParticipant(id:number, p:Paricipant):Observable<Paricipant>{
    return this.http.put<Paricipant>("http://localhost:3000/participants"+ id, p);
  }
  addParticipant(p:Paricipant):Observable<Paricipant>{
    return this.http.post<Paricipant>(URL,p);
  }
}
