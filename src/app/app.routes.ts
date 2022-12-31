import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroe/:id', component:HeroeComponent},
    { path: 'search/:termino', component:SearchComponent},
    { path: 'cart', component:CartComponent},
    { path: '**', pathMatch:'full', redirectTo : 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
