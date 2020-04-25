import { Component, OnInit } from "@angular/core";
import { MattressService } from "src/app/services/mattress.service";
import { Mattress } from "src/app/models/Mattress";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-mattress",
  templateUrl: "./mattress.component.html",
  styleUrls: ["./mattress.component.less"],
})
export class MattressComponent implements OnInit {
  mattresses: Mattress[] = [];
  type: number = 1;

  pageIndex:number = 1;

  constructor(
    private mattressService: MattressService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  // GET data for the table of products list
  getMattresses() {
    this.mattressService
      .getMattresses(this.pageIndex)
      .subscribe((res) => (this.mattresses = res));
  }

  // DELETE mattress
  deleteMattress(element) {
    this.mattressService.deleteMattress(element._id).subscribe((res) => {
      this.getMattresses();
      this.snackBar.open(res.Message, "", { duration: 2000 });
    });
  }
  // CREATE a mattress
  createMattress(element) {
    this.mattressService.createMattress(element).subscribe((res) => {
      this.getMattresses();
      this.snackBar.open(res.Message, "", { duration: 2000 });
    });
  }

  onChangePage(page){
    this.pageIndex = page
  }
}
