import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../entities/deck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  deck: Deck;

  constructor(private http: HttpClient) {

  }

  getRandomDeck(): Deck {
    this.deck = new Deck();
    this.deck.name = "Test Deck";
    this.deck.cards = [];

    for (let i = 0; i < 10; i++) {
      this.deck.cards.push(this.getRandomCard());
    }

    return this.deck;
  }

  getRandomCard(): Observable<any> {
    return this.http.get("https://api.scryfall.com/cards/random");
  }
}
