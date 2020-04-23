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
}
