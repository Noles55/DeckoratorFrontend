import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getRandomDeck(): any[] {
    return [
      { name: "Island", type: "Land"},
      { name: "Brainstorm", type: "Instant"},
      { name: "Mystic Remora", type: "Enchantment"},
      { name: "Sol Ring", type: "Artifact"},
      { name: "Jace, the Mind Sculptor", type: "Planeswalker"},
      { name: "Preordain", type: "Sorcery"},
      { name: "Snapcaster Mage", type: "Creature"}
    ]
  }

}
