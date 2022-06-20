import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListePokemonComponent } from './detail-pokemon/liste-pokemon/liste-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';

const pokemonRoutes: Routes = [
  { path:'pokemons', component: ListePokemonComponent},
  { path:'pokemon/:id', component: DetailPokemonComponent}
];

@NgModule({
  declarations: [
    ListePokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
