import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit ,OnDestroy{
  selected = 1;
  products: Product[] = [];
  sunscribtion: Subscription
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private productService: ProductService,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

    this.sunscribtion=this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  alertUser(product: Product) {
    this._snackBar.open(product.name + ' Added To Cart', 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000
    });
  }
  ngOnDestroy(): void {
    this.sunscribtion.unsubscribe()
  }


}
