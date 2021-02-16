import { Injectable } from '@angular/core';
import { Deck } from '../entities/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  cards = [
    { name: "Island", type: "Land", imageUrl: "assets/images/island.jpg"},
    { name: "Brainstorm", type: "Instant", imageUrl: "assets/images/brainstorm.jpg"},
    { name: "Mystic Remora", type: "Enchantment", imageUrl: "assets/images/mystic-remora.jpg"},
    { name: "Sol Ring", type: "Artifact", imageUrl: "assets/images/sol-ring.jpg"},
    { name: "Jace, the Mind Sculptor", type: "Planeswalker", imageUrl: "assets/images/jace-the-mind-sculptor.jpg"},
    { name: "Preordain", type: "Sorcery", imageUrl: "assets/images/preordain.jpg"},
    { name: "Snapcaster Mage", type: "Creature", imageUrl: "assets/images/snapcaster-mage.jpg"}
  ];

  getRandomDeck(): Deck {
    let deck: Deck = new Deck();
    deck.name = "Test Deck " + Math.round(Math.random());
    deck.cards = this.cards;
    return deck;
 }
}
