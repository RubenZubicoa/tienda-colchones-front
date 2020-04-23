import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:User = {
    email:null,
    password:null
  };
  
  API_URI:string = 'http://localhost:3000/users'

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  signin(user:User):Observable<any>{
    return this.http.post<any>(`${this.API_URI}/signin`, user)
  }

  getUser(id:string){
    this.http.get<User>(`${this.API_URI}/${id}`).subscribe(res => this.user = res)
  }

  leggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    this.router.navigate(['/login'])
  }
}
