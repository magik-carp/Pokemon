import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor(public pokedata: HttpService) {}
  pokedex: any = [];
  type2: boolean | undefined;
  clickNext(a: number) {
    a = a + 1;
    this.getInfoOfPokemon(a);
  }
  clickBack(a: number) {
    a = a - 1;
    this.getInfoOfPokemon(a);
  }
  getInfoOfPokemon(a: any) {
    this.pokedex = [];
    this.pokedata.getPokemon(a).subscribe((pokemon: any) => {
      this.pokedex.push({
        name: pokemon.name,
        id: pokemon.id,
        img: pokemon.sprites.other.dream_world.front_default,
        type1: pokemon.types[0]?.type.name,
        type2: pokemon.types[1]?.type.name,
      });
      // if (pokemon.types[1]) {
      //   this.pokedex[0].type2 = pokemon.types[1].type.name;
      // }
      // console.log(pokemon.types[1]);
    });
  }
  ngOnInit(): void {
    this.pokedata.getPokemon(1).subscribe((pokemon: any) => {
      this.pokedex.push({
        name: pokemon.name,
        id: pokemon.id,
        img: pokemon.sprites.other.dream_world.front_default,
        type1: pokemon.types[0]?.type.name,
        type2: pokemon.types[1]?.type.name,
      });
      console.log(this.pokedex[0].type2);
    });
  }
}
