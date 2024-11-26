import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:4000";
  id: number | undefined ;
  constructor(private http: HttpClient) { }

  setcurrentId(){
    this.id = this.id;
  }
  getCurrentId(){
    return  this.id
  }
  
  register(user: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, user)
  }

  login(user: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, user )
  }

  getdetails(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/details`)
  }

  getdetailByID(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/detail/${id}`)
  }
}
 