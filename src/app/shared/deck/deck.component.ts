import { Component, Input, OnInit } from '@angular/core';
import { Deck } from 'src/app/core/entities/deck';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() deck: Deck;

  cardTypes: string[] = [];
  cardList = {};

  constructor() { }

  ngOnInit() {
    this.deck.cards.forEach(card => {
      if (!this.cardTypes.includes(card.type)) this.cardTypes.push(card.type);
      if (!this.cardList[card.type]) this.cardList[card.type] = [];
      this.cardList[card.type].push(card);
    });
  }
}
