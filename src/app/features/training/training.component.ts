import { NotificationService } from './../../core/services/notification.service';
import { DeckService } from './../../core/services/deck.service';
import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/core/entities/deck';
import { Card } from 'src/app/core/entities/card';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  deck: Deck;
  selectedCard: Card;

  constructor(private deckService: DeckService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.deck = this.deckService.getRandomDeck();
    this.notificationService.subscribeToEvent<Card>("selectCard", this.onCardSelect);
  }


  onCardSelect = (card: Card) => {
    this.selectedCard = card;
  }
}
