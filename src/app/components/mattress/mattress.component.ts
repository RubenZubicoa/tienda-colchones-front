import { Component, OnInit } from '@angular/core';
import { MattressService } from 'src/app/services/mattress.service';
import { Mattress } from 'src/app/models/Mattress';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.less']
})
export class MattressComponent implements OnInit {

  mattresses:Mattress[] = [];
  tipe:number = 1;

  constructor(
    private mattressService:MattressService
  ) { }

  ngOnInit() {
    this.getMattresses();
  }

  getMattresses(){
    this.mattressService.getMattresses().subscribe(
      res => this.mattresses = res
    )
  }

}
