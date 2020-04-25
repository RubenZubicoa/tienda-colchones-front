import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { MatDialog } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product;

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  // show product datail modal
  details(product:Product): void {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      width: '650px',
      height: '650px',
      data: product
    });
  }

}
