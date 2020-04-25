import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mattress } from '../models/Mattress';

@Injectable({
  providedIn: 'root'
})
export class MattressService {

  private API_URI:string = 'http://localhost:3000/mattresses'

  constructor(
    private http:HttpClient
  ) { }

  getSomeMattresses():Observable<Mattress[]>{
    return this.http.get<Mattress[]>(`${this.API_URI}`)
  }

  getMattresses():Observable<Mattress[]>{
    return this.http.get<Mattress[]>(`${this.API_URI}/private`)
  }

  deleteMattress(id:string):Observable<any>{
    return this.http.delete<any>(`${this.API_URI}/private/${id}`)
  }

  getMattress(id:string):Observable<Mattress>{
    return this.http.get<Mattress>(`${this.API_URI}/private/${id}`)
  }

  updateMattress(id:string, mattress:Mattress):Observable<any>{
    return this.http.put<any>(`${this.API_URI}/private/${id}`, mattress)
  }

  createMattress(mattress:Mattress):Observable<any>{
    return this.http.post<any>(`${this.API_URI}/private`, mattress)
  }
}
