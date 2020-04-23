import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private usersService:UsersService
  ) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.usersService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }

 
}
