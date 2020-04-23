import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  user:User = {
    email:null,
    password:null
  }

  constructor(
    private usersService:UsersService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  signin(event){
    event.preventDefault();
    this.usersService.signin(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/colchones'])
      }
    )
  }

}
