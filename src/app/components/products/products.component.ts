import { Component, OnInit } from '@angular/core';
import { MattressService } from 'src/app/services/mattress.service';
import { Mattress } from 'src/app/models/Mattress';
import { BoxSpringService } from 'src/app/services/box-spring.service';
import { BoxSpring } from 'src/app/models/BoxSpring';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  mattresses:Mattress[] = [];
  springBoxes:BoxSpring[] = [];

  constructor(
    private mattressService:MattressService,
    private boxSpringService:BoxSpringService
  ) { }

  ngOnInit() {
    this.getSomeMattresses();
    this.getSomeSpringBoxes();
  }

  getSomeMattresses(){
    this.mattressService.getSomeMattresses().subscribe(res => this.mattresses = res)
  }

  getSomeSpringBoxes(){
    this.boxSpringService.getSomeSpringBoxes().subscribe(res => this.springBoxes = res)
  }

}
