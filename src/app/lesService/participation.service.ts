import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participation } from '../LesClasses/participation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
private apiUrl="http://localhost:3000/participations"
  constructor(private http:HttpClient) { }
  getParticipationForPar(idP: number,authToken: string): Observable<Participation[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const url = `${this.apiUrl}?idRes=${idP}`;
    return this.http.get<Participation[]>(url, { headers });
  }
  getParticipations(){
    return this.http.get(this.apiUrl)  
  }
  getParticipationById(id:number){
    return this.http.get(this.apiUrl+id)  
  }
  addParticipation(p:Participation):Observable<Participation>{
    return this.http.post<Participation>(this.apiUrl,p);
  }
  updateParticipation(id:number, p:Participation):Observable<Participation>{
    return this.http.put<Participation>(this.apiUrl+ id, p);
  }
  deleteParticipation(id:number){
    return this.http.delete(this.apiUrl + id);
  }
  getParticipationByClient(id:number):Observable<Participation[]>{
    return this.http.get<Participation[]>("http://localhost:3000/participation/participant/"+id)  
  }
}
