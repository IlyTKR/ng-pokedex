import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../../mock-pokemon-list';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
})
export class ListePokemonComponent {
  pokemonList : Pokemon[]=POKEMONS;
  constructor(
    private router: Router) { }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}

