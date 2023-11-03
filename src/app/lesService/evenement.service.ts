import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../LesClasses/event';

const url="http://localhost:3000/events"

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http:HttpClient) { }

  getEvenements():Observable<Event[]>
  {
    return this.http.get<Event[]>(url);
  }

  getEvenementById(id:number):Observable<Event>
  {
    return this.http.get<Event>('${url}/${id}')
  }
}

