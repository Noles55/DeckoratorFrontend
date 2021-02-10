import { NotificationService } from './../../core/services/notification.service';
import { DeckService } from './../../core/services/deck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  deck: any;
  selectedCard: string = "assets/images/Brainstorm.jpg";

  constructor(private deckService: DeckService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.deck = this.deckService.getRandomDeck();
    this.notificationService.subscribeToEvent<string>("selectCard", this.selectCard);
  }

  selectCard(cardName: string) {
    this.selectedCard = "assets/images/" + cardName + ".jpg";
    console.log(this.selectedCard)
  }
}
