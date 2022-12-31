import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
heroes:any[]=[]
termino:any;
  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino =params ['termino'];
      this.heroes = this.heroesService.buscarHeroe(params ['termino']);
    })
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
    }
}
