import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

  mode = new FormControl('side');  
  panelOpenState = false;

  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit() {
  }

}
