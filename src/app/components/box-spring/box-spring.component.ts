import { Component, OnInit } from '@angular/core';
import { BoxSpring } from 'src/app/models/BoxSpring';
import { BoxSpringService } from 'src/app/services/box-spring.service';
import { UsersService } from 'src/app/services/users.service';
import { isNull } from 'util';

@Component({
  selector: 'app-box-spring',
  templateUrl: './box-spring.component.html',
  styleUrls: ['./box-spring.component.less']
})
export class BoxSpringComponent implements OnInit {

  springBoxes:BoxSpring[] = [];
  type:number = 2;

  constructor(
    private boxSpringService:BoxSpringService,
    private usersService:UsersService
  ) { }

  ngOnInit() {
    this.getSpringBoxes();    
  }

  getSpringBoxes(){
    this.boxSpringService.getSpringBoxes().subscribe(
      res => {
        this.springBoxes = res;
      }
    )
  }

  deleteBoxSpring(element) {
    this.boxSpringService.deleteBoxSpring(element._id).subscribe(
      res => {
        this.getSpringBoxes();
      }
    )
  }

}
