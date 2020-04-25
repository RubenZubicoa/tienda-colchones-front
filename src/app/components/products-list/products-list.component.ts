import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Product } from 'src/app/models/Product';
import { MattressService } from 'src/app/services/mattress.service';
import { UsersService } from 'src/app/services/users.service';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, {static:false, read:false}) paginator:MatPaginator;
  @ViewChild(MatSort, {static:false, read:false}) sort:MatSort;

  @Input() products:Product[];
  // type 1: Mattress, tipe 2: box spring
  @Input() type:number;

  @Output()
  delete = new EventEmitter<Product>();

  @Output()
  create = new EventEmitter<Product>();

  dataSource = new MatTableDataSource<Product>();
  searchKey:string;

  displayedColumns = ['title', 'price', 'acciones'];

  product:Product = {
    description:null,
    image:null,
    price:null,
    title:null
  };

  constructor(
    private usersService:UsersService,
    private dialog:MatDialog
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
  
  createProduct(product:Product){
    this.create.emit(product)
  }

  addNewProduct(){
      const dialogRef = this.dialog.open(UpdateProductComponent, {
        width: '600px',
        data: this.product
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.product = result;
        this.createProduct(this.product)
      });
    
  }

  /**
   * FILTER TABLE
   */

  applyFilter(){
    this.dataSource.filter = this.searchKey.toLowerCase().trim();
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

}
