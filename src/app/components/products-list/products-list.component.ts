import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/Product';
import { MattressService } from 'src/app/services/mattress.service';
import { UsersService } from 'src/app/services/users.service';

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

  @Output()
  delete = new EventEmitter<Product>();

  dataSource = new MatTableDataSource<Product>();
  searchKey:string;

  displayedColumns = ['title', 'price', 'acciones'];

  constructor(
    private mattressService:MattressService,
    private usersService:UsersService
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.products;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onChange(event){
    console.log(event);
  }

  deleteProduct(element:Product) {
    this.delete.emit(element);
  }

  

}
