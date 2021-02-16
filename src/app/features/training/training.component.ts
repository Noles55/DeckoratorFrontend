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
    this.deck = this.deckService.getRandomDeck();
    this.notificationService.subscribeToEvent<Card>("selectCard", this.onCardSelect);
  }

  onCardSelect = (card: Card) => {
    this.selectedCard = card;
  }

  onRatingSubmit = () => {
    this.deck = this.deckService.getRandomDeck();
    this.rating = 50;
    console.log(this.rating);
  }

  onSliderChange = (event: MatSliderChange) => {
    this.rating = event.value;
  }
}
