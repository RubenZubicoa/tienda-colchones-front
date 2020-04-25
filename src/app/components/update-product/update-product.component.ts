import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.less']
})
export class UpdateProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit() {
  }

  // send the data of product
  save(title, image, description, price){
    this.data.title = title;
    this.data.image = image;
    this.data.description = description;
    this.data.price = price
  }

}
