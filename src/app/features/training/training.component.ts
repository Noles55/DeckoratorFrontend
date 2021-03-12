import { NotificationService } from './../../core/services/notification.service';
import { DeckService } from './../../core/services/deck.service';
import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/core/entities/deck';
import { Card } from 'src/app/core/entities/card';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  deck: Deck;
  selectedCard: Card;
  rating: number = 50;

  constructor(private deckService: DeckService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.subscribeToEvent<Card>("selectCard", this.onCardSelect);
    this.notificationService.sendEvent('loading', true);
    this.deckService.getRandomDeck().subscribe(deckJson => {
      this.deck = new Deck(deckJson)
      this.notificationService.sendEvent('loading', false);
      this.notificationService.sendEvent('selectCard', this.deck.cards.find(card => {
        card.name === this.deck.commanders[0];
      }))
    });
  }

  onCardSelect = (card: Card) => {
    this.selectedCard = card;
  }

  onRatingSubmit = () => {
    this.rating = 50;
    location.reload();
  }

  onSliderChange = (event: MatSliderChange) => {
    this.rating = event.value;
  }
}
