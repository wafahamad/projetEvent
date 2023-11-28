import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginParService {
 // public isconnectedA=false;
 // public isconnectedC=false;
 private apiUrl= 'http://localhost:3000/';
  success!: boolean;
  successParticipant!: boolean;
  constructor(private http:HttpClient) { }

  authenticate(email: string, password: string): Observable<string> {
    return this.http.post<string>(
      `${this.apiUrl}/login`,
      {
        email,
        password,
      },
      {
        responseType: 'text' as 'json',
      }
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Combined method to create headers and make authenticated requests
  authenticatedRequest(url: string): Observable<any> {
    const token = this.getToken();
    if (!token) {
      throw new Error('Token is missing'); // Handle missing token error as needed
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/${url}`, { headers }); // Make authenticated request
  }
    //getLoginPar(){
    //  return this.http.get<any>('http://localhost:3000/participants');
   // }
  //  getLoginAdmin(){
  //    return this.http.get<any>('http://localhost:3000/organisations');
  // }

}
