import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];
  constructor(private httpClient: HttpClient) {}

  // create getfunction observable to get the pokemons
  getPokemons(): any {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
}
