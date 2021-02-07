import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() deck: any;

  cardTypes: string[] = [];
  cardList: any = {};

  constructor() { }

  ngOnInit() {
    this.deck.forEach(card => {
      if (!this.cardTypes.includes(card.type)) this.cardTypes.push(card.type);
      if (!this.cardList[card.type]) this.cardList[card.type] = [];
      this.cardList[card.type].push(card.name);
    });
  }
}
