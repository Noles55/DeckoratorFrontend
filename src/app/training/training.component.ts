import { DeckService } from './../services/deck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  deck;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deck = this.deckService.getRandomDeck();
  }

}
