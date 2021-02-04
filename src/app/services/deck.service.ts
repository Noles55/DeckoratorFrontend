import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getRandomDeck() {
    return [
      { id: 1, name: "Island"},
      { id: 2, name: "Counterspell"},
      { id: 3, name: "Brainstorm"},
      { id: 4, name: "Force of Will"}
    ]
  }

}
