import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  pokemonId?: number;
  pokemon?: any;

  constructor(private http: HttpClient) { }

  getPokemon() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
      .subscribe(data => {
        this.pokemon = data;
      }, error => {
        console.error(error);
      });
  }
}

