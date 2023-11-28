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
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(${apiUrl}/evenements);
  }

  // Get event by ID
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(${apiUrl}/evenements/${id});
  }

  // Add a new event
  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(${apiUrl}/evenements/ajout, event);
  }

  // Update an event by ID
  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(${apiUrl}/evenements/${id}, event);
  }

  // Delete an event by ID
  deleteEvent(id: number): Observable<any> {
    return this.http.delete<any>(${apiUrl}/evenements/${id});
  }

}

