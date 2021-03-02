import { NotificationService } from './../../core/services/notification.service';
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

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.sendEvent("loading", true);
    this.deck.cards.forEach(cardObservable => cardObservable.subscribe(cardJson => {
      let card = new Card(cardJson);
          if (!this.cardTypes.includes(card.main_type)) this.cardTypes.push(card.main_type);
          if (!this.cardList[card.main_type]) this.cardList[card.main_type] = [];
          this.cardList[card.main_type].push(card);
    }));
    // forkJoin(this.deck.cards).subscribe(val => {
    //   val.forEach(cardJson => {
    //     let card = new Card(cardJson);
    //     if (!this.cardTypes.includes(card.main_type)) this.cardTypes.push(card.main_type);
    //     if (!this.cardList[card.main_type]) this.cardList[card.main_type] = [];
    //     this.cardList[card.main_type].push(card);
    //   });
      this.notificationService.sendEvent("loading", false);
    // });
  }
}
