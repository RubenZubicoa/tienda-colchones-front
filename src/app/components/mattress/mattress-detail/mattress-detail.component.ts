import { Component, OnInit } from "@angular/core";
import { Mattress } from "src/app/models/Mattress";
import { MattressService } from "src/app/services/mattress.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";
import { UpdateProductComponent } from "../../update-product/update-product.component";

@Component({
  selector: "app-mattress-detail",
  templateUrl: "./mattress-detail.component.html",
  styleUrls: ["./mattress-detail.component.less"],
})
export class MattressDetailComponent implements OnInit {
  id: string;

  mattress: Mattress = {
    description: null,
    image: null,
    price: null,
    title: null,
  };

  constructor(
    private mattressService: MattressService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getMattress(this.id);
  }
  // GET the mattress
  getMattress(id: string) {
    this.mattressService
      .getMattress(id)
      .subscribe((res) => (this.mattress = res));
  }

  // Show update product modal
  edit(): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: "600px",
      data: this.mattress,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if the user click on the ok button of the modal, it will be updated
      if (result !== undefined) {
        this.mattressService
          .updateMattress(this.id, this.mattress)
          .subscribe((res) =>
            this.snackBar.open(res.Message, "", { duration: 2000 })
          );
      }
    });
  }
}
