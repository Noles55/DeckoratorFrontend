import { NotificationService } from './../../core/services/notification.service';
import { DeckService } from './../../core/services/deck.service';
import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/core/entities/deck';
import { Card } from 'src/app/core/entities/card';
import { MatSliderChange } from '@angular/material/slider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  deck: Deck;
  selectedCard: Card;
  rating: number = 50;

  constructor(private deckService: DeckService, private notificationService: NotificationService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.deck = data.deck);
    this.notificationService.subscribeToEvent<Card>("selectCard", this.onCardSelect);
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
