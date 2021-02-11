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

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deck = this.deckService.getRandomDeck();
  }
}
