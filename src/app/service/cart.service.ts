import { Injectable } from '@angular/core';
import { Heroe } from './heroes.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
items:Heroe[]=[];

addToCart(heroe:Heroe,){
 this.items.push(heroe);
 //localStorage.setItem('items', JSON.stringify(this.items))
}

getItems(){
  return this.items;
}
clearCart(){
  this.items=[];
  return this.items;
}
  constructor() { }
}
