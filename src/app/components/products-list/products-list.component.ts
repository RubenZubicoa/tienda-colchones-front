import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Product } from 'src/app/models/Product';
import { MattressService } from 'src/app/services/mattress.service';
import { UsersService } from 'src/app/services/users.service';
import { UpdateProductComponent } from '../update-product/update-product.component';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { BoxSpringService } from 'src/app/services/box-spring.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit, OnChanges {
  
  // paginator
  @ViewChild(MatPaginator, {static:false, read:false}) paginator:MatPaginator;
  @ViewChild(MatSort, {static:false, read:false}) sort:MatSort

  @Input() products:Product[];
  // type 1: Mattress, tipe 2: box spring
  @Input() type:number;

  // emitter delete button
  @Output()
  delete = new EventEmitter<Product>();

  // emitter create button
  @Output()
  create = new EventEmitter<Product>();

  @Output()
  changePage = new EventEmitter<number>();

  // data of the table
  data: Product[] = [];

  //total quantity of products
  resultsLength:number = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  displayedColumns: string[] = ['title', 'price', 'actions'];

  product:Product = {
    description:null,
    image:null,
    price:null,
    title:null
  };

  constructor(
    // declared usersService to get the user data, column actions in html
    private usersService:UsersService,
    private dialog:MatDialog,
    private mattressService:MattressService,
    private boxSpringService:BoxSpringService
  ) { }

  ngOnInit() {
    this.getTotalQuantity();
  }

  ngOnChanges(){
    this.data = this.products;
    this.getTotalQuantity();
  }

  //emit delete to box spring or mattress component
  deleteProduct(element:Product) {
    this.delete.emit(element);
  }
  
  //emit create to box spring or mattress component
  createProduct(product:Product){
    this.create.emit(product)
  }

  //emit the number of page to boz spring or mattress component
  onChangePage(page){
    this.changePage.emit(page)
  }

  //show the modal of create a product
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
   * GET total quantity of results
   */

  getTotalQuantity(){
    if(this.type == 1){
      this.mattressService.getCountMattresses().subscribe(res => this.resultsLength = res)
    }else{
      this.boxSpringService.getCountSpringBoxes().subscribe(res => this.resultsLength = res)
    }
  }

  //GET data and configure the paginator of the table
  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          this.onChangePage(this.paginator.pageIndex + 1);
          if(this.type == 1){
            return this.mattressService!.getMattresses(this.paginator.pageIndex + 1);
          }else{
            return this.boxSpringService!.getSpringBoxes(this.paginator.pageIndex + 1);
          }
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}



