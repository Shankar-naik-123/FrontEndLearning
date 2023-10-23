import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserAPICallsService {

  allUsers: any
  constructor(private http: HttpClient) { }
  baseUrl = "https://localhost:44377/api/";

  AddUser(user: User) {
    return this.http.post(this.baseUrl + "User/AddUser", user, { responseType: 'text' })

  }
  GetUsers() {
    return this.http.get(this.baseUrl + "User/GetUsers", { responseType: 'json' })
  }

  GetUser(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.get(this.baseUrl + "User/GetUser", { params: params })
  }

  UpdateUser(user: User) {
    return this.http.put(this.baseUrl + "User/UpdateUser", user, { responseType: 'text' })
  }

  DeleteUser(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.delete(this.baseUrl + "User/DeleteUser", { params: params })
  }

}

