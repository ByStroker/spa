import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) {
    
   }
   carritoLocalStorage(){
    
   }

items = this.cartService.getItems();
  ngOnInit(): void {
  }

}
