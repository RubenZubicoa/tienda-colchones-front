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

  getSpringBoxes():Observable<BoxSpring[]>{
    return this.http.get<BoxSpring[]>(`${this.API_URI}/private`)
  }

  createBoxSpring(boxSpring:BoxSpring){
    return this.http.post(`${this.API_URI}/private`, boxSpring);
  }

  deleteBoxSpring(id:string){
    return this.http.delete(`${this.API_URI}/${id}`)
  }
}
