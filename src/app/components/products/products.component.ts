import { Component, OnInit } from '@angular/core';
import { MattressService } from 'src/app/services/mattress.service';
import { Mattress } from 'src/app/models/Mattress';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  mattresses:Mattress[] = [];

  constructor(
    private mattressService:MattressService
  ) { }

  ngOnInit() {
    this.getSomeMattresses();
  }

  getSomeMattresses(){
    this.mattressService.getSomeMattresses().subscribe(res => this.mattresses = res)
  }

}
