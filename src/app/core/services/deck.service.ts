import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getRandomDeck(): any[] {
    let list = [];

    for (var i = 0; i < 100; i++)
    {
      list.push({ id: i, name: "Card " + i})
    }

    return list;
  }

}
