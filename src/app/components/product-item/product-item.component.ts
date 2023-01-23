import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  products: Product[]
  @Input() product: Product
  @Output() addedproduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private CartService: CartService, private productServcice: ProductService) { }

  ngOnInit(): void {

    this.productServcice.checkProductCart(this.product)

  }

  add(product: Product) {
    if (product.count == 0) {
      this.addedproduct.emit(product)
    }
    this.CartService.add(product)

  }

  removeItem(product: Product) {
    this.CartService.remove(product);

  }

  checkProductCart(product: Product) {

    const index = this.CartService.cart.value.filter(item => item.id === product.id).length;

    if (index === 0) {
      product.count = 0
    }
    else {
      product.count = 4
    }

  }
}
