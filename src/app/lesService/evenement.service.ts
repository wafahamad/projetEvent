import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../LesClasses/event';
import { Paricipant } from '../LesClasses/paricipant';

const url="http://localhost:3000/evenements"
const urlP="http://localhost:3000/participants"

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) { }
  getParticipant():Observable<Paricipant[]>{
    return this.http.get<Paricipant[]>(urlP)  
  }
  getParticipantById(id:number):Observable<Paricipant>{
    return this.http.get<Paricipant>(urlP+id)  
  }
  getEvenements():Observable<Event[]>
  {
    return this.http.get<Event[]>('http://localhost:3000/evenements');
  }

  getEvenementById(id:number):Observable<Event>
  {
    return this.http.get<Event>(url+"/"+id);
  }
}

