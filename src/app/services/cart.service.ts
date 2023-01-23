import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  currentCart = this.cart.asObservable()
  count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartCount = this.count.asObservable();

  constructor() { }

  getCart(): Product[] {
    return this.cart.value;
  }
  serCartCount(count: number) {
    this.count.next(count)
  }

  add(product: Product) {
    const index = this.cart.value.filter(item => item.id === product.id).length;
    if (index === 0) {
      product.count += 1
      this.cart.value.push(product)
      this.cart.next(this.cart.value)
      this.serCartCount(this.count.value + 1)
      console.log(this.count.value);
    }
    else {
      this.cart.next(this.cart.value.filter(item => item.id != product.id))
      product.count++
      this.cart.value.push(product)
      this.cart.next(this.cart.value)
      console.log("filtered");
      console.log(this.cart.value);
      this.serCartCount(this.count.value + 1)

    }
  }
  remove(product: Product) {
    if (product.count > 1) {

      this.cart.next(this.cart.value.filter(item => item.id != product.id))
      product.count--
      this.cart.value.push(product)
      this.cart.next(this.cart.value)
      this.serCartCount(this.count.value - 1)
    } else {

      product.count -= 1
      this.cart.next(this.cart.value.filter(item => item.id != product.id))
      this.serCartCount(this.count.value - 1)

    }
  }
  resetCart() {
    this.cart.next([])
    this.count.next(0)
  }
}
