import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Card } from 'src/app/core/entities/card';
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
    forkJoin(this.deck.cards).subscribe(val => val.forEach(cardJson => {
      let card = new Card(cardJson);
      if (!this.cardTypes.includes(card.super_type)) this.cardTypes.push(card.super_type);
      if (!this.cardList[card.super_type]) this.cardList[card.super_type] = [];
      this.cardList[card.super_type].push(card);
    }));
  }
}
