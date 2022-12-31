import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/service/heroes.service';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
heroe:any={};


addToCart(heroe:Heroe){
  this.cartService.addToCart(heroe);
  window.alert("tu producto se agregó al carrito!.")
}

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private cartService:CartService) {
                
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params ['id'])
      //console.log(params['id'] );
    });
   }
}
