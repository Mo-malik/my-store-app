import { Component, OnInit, } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  count:number=0
  constructor(private cartService:CartService){

  }
  
  ngOnInit(): void {
    this.cartService.cartCount.subscribe(value=>this.count=value)
  }

}
