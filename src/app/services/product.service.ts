import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products:Product[]
 
  constructor(private http:HttpClient,private cartService:CartService) { }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:3000/Products')
  }
  getProductById(id:any){
    return this.http.get<Product>('http://localhost:3000/Products/'+id)
  }
  checkProductCart(product:Product){
    this.cartService.cart.subscribe(value=>{
      this.products=value;
          })
    const index = this.cartService.cart.value.filter(item => item.id === product.id).length;
    if (index === 0) {
      product.count=0
    }
    else {
      product.count=this.cartService.cart.value.filter(item => item.id === product.id)[0].count;
    }
  }
}
