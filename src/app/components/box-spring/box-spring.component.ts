import { Component, OnInit } from '@angular/core';
import { BoxSpring } from 'src/app/models/BoxSpring';
import { BoxSpringService } from 'src/app/services/box-spring.service';
import { UsersService } from 'src/app/services/users.service';
import { isNull } from 'util';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-box-spring',
  templateUrl: './box-spring.component.html',
  styleUrls: ['./box-spring.component.less']
})
export class BoxSpringComponent implements OnInit {

  springBoxes:BoxSpring[] = [];
  type:number = 2;
  // Page index of the table of products list
  pageIndex:number = 1;

  constructor(
    private boxSpringService:BoxSpringService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
  }

  // GET data for the table of products list
  getSpringBoxes(){
    this.boxSpringService.getSpringBoxes(this.pageIndex).subscribe(
      res => {
        this.springBoxes = res;
      }
    )
  }

  // DELETE one box spring
  deleteBoxSpring(element) {
    this.boxSpringService.deleteBoxSpring(element._id).subscribe(
      res => {
        this.getSpringBoxes();
        this.snackBar.open(res.Message, '', {duration:2000})
      }
    )
  }

  // CREATE a box spring
  createBoxSpring(element){
    this.boxSpringService.createBoxSpring(element).subscribe(
      res => {
        this.getSpringBoxes();
        this.snackBar.open(res.Message, '', {duration:2000})
      }
    )
  }

  onChangePage(page){
    this.pageIndex = page
  }

  
  

}
