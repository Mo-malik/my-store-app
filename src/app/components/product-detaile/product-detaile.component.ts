import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detaile',
  templateUrl: './product-detaile.component.html',
  styleUrls: ['./product-detaile.component.css']
})
export class ProductDetaileComponent implements OnInit, OnDestroy {

  id: any;
  product: Product;
  sunscribtion: Subscription
  allProduct:Product[]
  constructor(private roter: ActivatedRoute, private productService: ProductService,
    private CartService: CartService) {
  }

  ngOnInit(): void {
    this.id = this.roter.snapshot.paramMap.get('id');
    this.sunscribtion=this.productService.getProducts().subscribe(products=>{
      this.allProduct=products
      this.product=this.allProduct.filter(p=>p.id==this.id)[0]
      this.productService.checkProductCart(this.product)

    })
  }

  add(product: Product) {
    this.CartService.add(product)

  }

  removeItem(product: Product) {
    this.CartService.remove(product);
  }

  ngOnDestroy(): void {
    this.sunscribtion.unsubscribe()
  }

}
