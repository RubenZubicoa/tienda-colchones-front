import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoxSpring } from '../models/BoxSpring';

@Injectable({
  providedIn: 'root'
})
export class BoxSpringService {

  API_URI:string = 'http://localhost:3000/springBoxes'

  constructor(private http:HttpClient) { }

  getSomeSpringBoxes():Observable<BoxSpring[]>{
    return this.http.get<BoxSpring[]>(`${this.API_URI}`);
  }

  getSpringBoxes(page:number):Observable<BoxSpring[]>{
    return this.http.get<BoxSpring[]>(`${this.API_URI}/private/${page}`)
  }

  deleteBoxSpring(id:string):Observable<any>{
    return this.http.delete<any>(`${this.API_URI}/private/${id}`)
  }

  getBoxSpring(id:string):Observable<BoxSpring>{
    return this.http.get<BoxSpring>(`${this.API_URI}/private/${id}`)
  }

  updateBoxSpring(id:string, boxSpring:BoxSpring):Observable<any>{
    return this.http.put<any>(`${this.API_URI}/private/${id}`, boxSpring)
  }

  createBoxSpring(boxSpring:BoxSpring):Observable<any>{
    return this.http.post<any>(`${this.API_URI}/private`, boxSpring)
  }

  getCountSpringBoxes():Observable<number>{
    return this.http.get<number>(`${this.API_URI}/count`)
  }
}
