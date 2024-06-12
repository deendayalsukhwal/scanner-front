import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/register'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
