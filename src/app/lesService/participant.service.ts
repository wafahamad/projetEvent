import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paricipant } from '../LesClasses/paricipant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  const URL = 'http://localhost:3000/particpants';
  const api = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }
 // Get all participants
 getParticipants(): Observable<Paricipant[]> {
  return this.http.get<Paricipant[]>(${URL}/participants);
}

// Get participant by ID
getParticipantById(id: number): Observable<Paricipant> {
  return this.http.get<Paricipant>(${URL}/participants/${id});
}
registerParticipant(email: string, password: string,nom : string, prenom:string,cin:string,age:number): Observable<any> {
  const body = { e_mail: email, pwd: password , nom : nom, prenom:prenom, cin : cin , age:age};
  return this.http.post<any>(${api}/participants/register, body);
}
// Update participant by ID
updateParticipant(id: number, participant: Paricipant): Observable<Paricipant> {
  return this.http.put<Paricipant>(${URL}/participants/${id}, participant);
}

// Delete participant by ID
deleteParticipant(id: number): Observable<any> {
  return this.http.delete<any>(${URL}/participants/${id});
}
}
