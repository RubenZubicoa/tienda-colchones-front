import { Component, OnInit } from '@angular/core';
import { UpdateProductComponent } from '../../update-product/update-product.component';
import { BoxSpringService } from 'src/app/services/box-spring.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BoxSpring } from 'src/app/models/BoxSpring';

@Component({
  selector: 'app-box-spring-detail',
  templateUrl: './box-spring-detail.component.html',
  styleUrls: ['./box-spring-detail.component.less']
})
export class BoxSpringDetailComponent implements OnInit {

  id:string;

  boxSpring: BoxSpring = {
    description:null,
    image:null,
    price:null,
    title:null
  }

  constructor(
    private boxSpringService:BoxSpringService,
    private activatedRoute:ActivatedRoute,
    private dialog:MatDialog,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id
    this.getMattress(this.id);
  }

  //GET the mattress
  getMattress(id:string){
    this.boxSpringService.getBoxSpring(id).subscribe(res => this.boxSpring = res)
  }

  // Show update product modal
  edit(): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '600px',
      data: this.boxSpring
    });

    dialogRef.afterClosed().subscribe(result => {
      // if the user click on the ok button of the modal, it will be updated
      if(result !== undefined){
        this.boxSpringService.updateBoxSpring(this.id, this.boxSpring).subscribe(
          res => this.snackBar.open(res.Message, "", {duration:2000})
        )
      }
    });
  }

}
