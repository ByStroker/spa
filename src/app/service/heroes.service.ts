import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product} from '../components/heroe/product';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  
private heroes:Heroe[]=[
    {
      nombre: "Huevo",
      bio: "$350",
      img: "assets/img/1.jpg",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "frijol",
      bio: "$100",
      img: "assets/img/frijol.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "aceite",
      bio: "$500",
      img: "assets/img/aceite.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "azucar",
      bio: "$245",
      img: "assets/img/azucar.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Huevo bco guadalupe",
      bio: "$50",
      img: "assets/img/3.png",
      aparicion: "1940-06-01",
      casa: "DC"
    }
];
  constructor(private http: HttpClient) {}

   getHeroes():Heroe[]{
     return this.heroes;
   }
   getHeroe( idx:number){
     return this.heroes[idx];
   }
   buscarHeroe(termino:string):Heroe[]{
     let heroesArr:Heroe[]=[];
     termino = termino.toLowerCase();
     for( let i = 0; i<this.heroes.length; i++){
       let heroe = this.heroes[i];
let nombre = heroe.nombre.toLowerCase();
if (nombre.indexOf(termino) >= 0){
  heroe.idx= i;
  heroesArr.push(heroe);
}
     }
     return heroesArr;
   }
   
//inicia productos


//termina productos



}

export interface Heroe{
nombre:String;
bio:String;
img:String;
aparicion:String;
casa:String;
idx?:number;
};