import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { User } from './model/interface/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:4000";
  
  constructor(private http: HttpClient) { }
  
  register(user: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, user)
  }

  login(user: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, user )
  }

  getdetails(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/details`)
  }

  getdetailByID(id: String): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/detail/${id}`)
  }

  deleteUser(id: String): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }

  changePassword(credentials: any):Observable<any>{
    return this.http.post(`${this.baseUrl}/changePassword`,credentials)
  }
  
  // updateUser(id: String, updateUser: User ):void{

  //   let index = this.userData.findIndex((res)=>res._id == id)
  //   this.userData[index] = updateUser;
  //   localStorage.setItem("userData",JSON.stringify(this.userData))
  // }
}
 