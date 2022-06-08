import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
})
export class ListePokemonComponent {
  pokemonList : Pokemon[]=POKEMONS;
  constructor() { }
}

