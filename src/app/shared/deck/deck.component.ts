import { DeckService } from './../../core/services/deck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deck = this.deckService.getRandomDeck();
  }

}
