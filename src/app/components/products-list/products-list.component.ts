import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/Product';
import { MattressService } from 'src/app/services/mattress.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, {static:false, read:false}) paginator:MatPaginator;
  @ViewChild(MatSort, {static:false, read:false}) sort:MatSort;

  @Input() products:Product[];
  // tipe 1: Mattress, tipe 2: box spring
  @Input() tipe:number;

  dataSource = new MatTableDataSource<Product>();
  searchKey:string;

  displayedColumns = ['title', 'price', 'acciones'];

  constructor(
    private mattressService:MattressService
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.dataSource.data = this.products;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  

}
